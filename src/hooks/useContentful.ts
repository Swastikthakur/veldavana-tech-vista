import { useState, useEffect } from 'react';
import { ContentfulEntry, fetchContentfulEntries } from '@/services/contentful';

// Custom hook for fetching Contentful data
export function useContentful(contentTypeId: string, limit: number = 100) {
  const [data, setData] = useState<ContentfulEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadContent() {
      try {
        setLoading(true);
        setError(null);
        const entries = await fetchContentfulEntries(contentTypeId, limit);
        setData(entries);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch content');
      } finally {
        setLoading(false);
      }
    }

    if (contentTypeId) {
      loadContent();
    }
  }, [contentTypeId, limit]);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const entries = await fetchContentfulEntries(contentTypeId, limit);
      setData(entries);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch content');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
}

// Specific hooks for common content types
export function useBlogPosts(limit?: number) {
  return useContentful('blogPost', limit); // Replace with your actual content type ID
}

export function useServices(limit?: number) {
  return useContentful('service', limit); // Replace with your actual content type ID
}

export function useTeamMembers(limit?: number) {
  return useContentful('teamMember', limit); // Replace with your actual content type ID
}

export function useHeroContent() {
  return useContentful('heroSection', 1); // Usually just one hero section
}