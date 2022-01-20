import EyeIcon from '@ui/icons/EyeIcon';

import { P } from '../ui/components/Typography';
import { ViewsCount } from './ViewsCount';

export const ViewsStat = ({ slug }: { slug: string }) => {
  return (
    <div className="flex items-center gap-2 text-hint">
      <EyeIcon />
      <P color="text-current" size="text-sm">
        <ViewsCount slug={slug} />
      </P>
    </div>
  );
};
