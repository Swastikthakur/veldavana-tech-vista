// Contentful service for fetching content
const SPACE_ID = 'fruo7bk35g78';
const ACCESS_TOKEN = 'zHbx61b2nA5OYa4WQXQ8QIOvPnqNATgCyTg8DxMAFl8';
const BASE_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master`;

export interface ContentfulEntry {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: Record<string, any>;
}

export interface ContentfulResponse {
  items: ContentfulEntry[];
  total: number;
  skip: number;
  limit: number;
}

// Generic function to fetch content by content type
export async function fetchContentfulEntries(
  contentTypeId: string,
  limit: number = 100
): Promise<ContentfulEntry[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/entries?access_token=${ACCESS_TOKEN}&content_type=${contentTypeId}&limit=${limit}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: ContentfulResponse = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching Contentful entries:', error);
    return [];
  }
}

// Specific functions for common content types
export async function fetchBlogPosts() {
  return fetchContentfulEntries('blogPost'); // Replace with your blog content type ID
}

export async function fetchServices() {
  return fetchContentfulEntries('service'); // Replace with your service content type ID
}

export async function fetchProjects() {
  return fetchContentfulEntries('project'); // Replace with your project content type ID
}

export async function fetchAchievements() {
  return fetchContentfulEntries('achievement'); // Replace with your achievement content type ID
}

export async function fetchTestimonials() {
  return fetchContentfulEntries('testimonial'); // Replace with your testimonial content type ID
}

export async function fetchTeamMembers() {
  return fetchContentfulEntries('teamMember'); // Replace with your team member content type ID
}

export async function fetchHeroContent() {
  return fetchContentfulEntries('heroSection'); // Replace with your hero content type ID
}

// Helper function to resolve asset URLs
export function getAssetUrl(asset: any): string {
  if (asset && asset.fields && asset.fields.file) {
    return `https:${asset.fields.file.url}`;
  }
  return '';
}

// Helper function to format date
export function formatContentfulDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}