import { useEffect, useState } from "react";

type SpotifyResourceType = "artist" | "album" | "track" | "playlist" | "episode" | "show";

type Props = {
  /** What Spotify resource this is */
  type: SpotifyResourceType;
  /** Spotify resource ID, e.g. "3TVXtAsR1Inumwj472S9r4" */
  id: string;
  /** Accessible label for the image */
  alt: string;
  /** Rendered while loading or if the fetch fails */
  fallback: React.ReactNode;
  /** Classes applied to the <img> element */
  className?: string;
};

type OEmbedResponse = {
  thumbnail_url?: string;
  title?: string;
};

/**
 * Pulls the current thumbnail for any Spotify resource (artist, album, track,
 * playlist, ...) from Spotify's public oEmbed endpoint.
 *
 * No API key required and CORS is allowed (access-control-allow-origin: *),
 * so it always shows whatever image Spotify is currently serving.
 *
 * Falls back to the supplied `fallback` node while loading or on any error.
 */
export function SpotifyImage({ type, id, alt, fallback, className }: Props) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setImageUrl(null);
    setFailed(false);

    const oembedUrl =
      "https://open.spotify.com/oembed?url=" +
      encodeURIComponent(`https://open.spotify.com/${type}/${id}`);

    fetch(oembedUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<OEmbedResponse>;
      })
      .then((data) => {
        if (cancelled) return;
        if (data.thumbnail_url) {
          setImageUrl(data.thumbnail_url);
        } else {
          setFailed(true);
        }
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [type, id]);

  if (!failed && imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    );
  }

  return <>{fallback}</>;
}
