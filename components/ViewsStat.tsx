import { EyeIcon } from './EyeIcon';
import { P } from './Typography';
import { ViewsCounter } from './ViewsCounter';

export const ViewsStat = ({ slug }: { slug: string }) => {
  return (
    <div className="flex items-center gap-2 text-hint">
      <EyeIcon />
      <P color="text-current" size="text-sm">
        <ViewsCounter slug={slug} />
      </P>
    </div>
  );
};
