import supabase from 'lib/supabase'
import { View } from 'models/view'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data, error } = await supabase.from<View>('views').select('*')

    if (error) return res.status(400).json({ message: error.message })

    if (!data) {
      return res.status(500).json({ message: 'Unexpected response data - was null when no error' })
    }

    const totalViews = data.map((view) => view.count).reduce((prev, curr) => prev + curr)

    return res.status(200).json({ total: totalViews.toString() })
  } catch (e) {
    if (!(e instanceof Error)) throw new Error(`Unknown error: ${JSON.stringify(e)}`)

    return res.status(500).json({ message: e.message })
  }
}
