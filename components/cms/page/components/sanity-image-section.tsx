import Image from 'next/image';

import { PageSectionItem } from '@/components/cms/page/sanity-page';
import { PageSection } from '@/components/layout/page-section/page-section';
import { ImageSection } from '@/components/sections/image-section/image-section';
import { RichText } from '@/components/ui/rich-text/rich-text';

type SanityImageSectionProps = PageSectionItem<'imageSection'>;

export const SanityImageSection = (props: SanityImageSectionProps) => {
  const section = props;
  return (
    <PageSection key={section._key}>
      <ImageSection
        title={section.title}
        description={<RichText value={section.body}></RichText>}
        layout={section.layout}
        image={
          section.image.asset?.url && (
            <Image className='object-cover' src={section.image.asset.url} alt={section.image.alt} fill />
          )
        }
      />
    </PageSection>
  );
};
