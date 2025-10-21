import { PortableText } from 'next-sanity';
import { Richtext } from '../../../lib/sanity/types/sanity-types';
import { textComponents } from './text-components';

interface RichTextProps {
  value: Richtext;
}
export const RichText = (props: RichTextProps) => {
  return <PortableText value={props.value.richtextBody} components={textComponents} />;
};
