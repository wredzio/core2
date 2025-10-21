import { apiVersion, dataset, projectId, studioUrl, useCdn } from '@sanity/sanity.api';
import type { PreviewData } from 'next';
import { createClient, type SanityClient } from 'next-sanity';

export function getClient(preview?: { token: string; perspective: PreviewData }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
    stega: { enabled: preview?.token ? true : false, studioUrl },
  });
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts');
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: typeof preview.perspective === 'string' ? preview.perspective.split(',') : 'drafts',
    });
  }
  return client;
}
