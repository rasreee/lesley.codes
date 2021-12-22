import supabase from 'lib/supabase'
import { View } from 'models/view'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const slug = req.query.slug.toString()

    if (req.method === 'POST') {
      const { data: newOrUpdatedViews, error } = await supabase.from<View>('views').upsert({ slug, count: 1 }).single()

      if (error) return res.status(400).json({ message: error.message })

      if (!newOrUpdatedViews) {
        return res.status(500).json({ message: 'Unexpected response data - was null when no error' })
      }

      return res.status(200).json({
        total: newOrUpdatedViews.count.toString()
      })
    }

    if (req.method === 'GET') {
      const { data: views, error } = await supabase.from<View>('views').select('*').match({ slug }).single()

      if (error) return res.status(400).json({ message: error.message })

      if (!views) {
        return res.status(500).json({ message: 'Unexpected response data - was null when no error' })
      }

      return res.status(200).json({ total: views.count.toString() })
    }
  } catch (e) {
    if (!(e instanceof Error)) throw new Error(`Unknown error: ${JSON.stringify(e)}`)

    return res.status(500).json({ message: e.message })
  }
}
