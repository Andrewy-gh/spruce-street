export interface Link {
  id: string;
  name: string;
  path: string;
}

export interface Section {
  id: string;
  section: string;
  links: Link[];
}
