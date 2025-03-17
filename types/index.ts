export type Contact = "ask-our-cm" | "greenbay" | "manitowoc" | "sheboygan";

export type Galleries =
  | "individual-monuments"
  | "companion-monuments"
  | "hmong-monuments"
  | "jewish-monuments"
  | "slant-monuments"
  | "etchings"
  | "garden-art"
  | "granite-colors";

export type ImageMetadata = {
  key?: string;
  url?: string;
  lastModified?: Date;
  size?: number;
};

export type GraniteColorImageMetadata = {
  key?: string;
  url?: string;
  lastModified?: Date;
  size?: number;
  caption?: string;
};
