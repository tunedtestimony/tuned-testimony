type StreamingLink = {
  name: string;
  url: string;
};

type HymnTrack = {
  title: string;
  style: string;
  songSlug?: string;
};

type HymnAlbum = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  links: StreamingLink[];
  tracks: HymnTrack[];
};

export const hymnAlbums: HymnAlbum[] = [
  {
    slug: "primary-days",
    title: "Primary Days",
    subtitle: "Timeless songs. Eternal truths.",
    image: "/albums/primary-days.png",
		links: [],
		tracks: [],
  },
	{
		slug: "ever-near",
		title: "Ever Near",
		subtitle: "Hymns of faith, peace & trust in our Savior",
		image: "/albums/ever-near.png",
		links: [
			{
			name: "YouTube",
			url: "https://www.youtube.com/watch?v=cxf-t013zcc&list=OLAK5uy_kAF3QRXGzZZvdm7VLRrJpBcCLNYtKxGHg&index=2",
			},
			{
			name: "Spotify",
			url: "https://open.spotify.com/album/7E02uOPavm4CUnNvO0ekon",
			},
			{
			name: "Apple Music",
			url: "https://music.apple.com/us/album/ever-near/1820876435?uo=4",
			},
			{
			name: "YouTube Music",
			url: "https://music.youtube.com/playlist?list=OLAK5uy_lfgvw4SnqWNmw6PkwoM5nzLnpi0epIzmA&si=k7s7hc_Ka1kInvrM",
			},
			{
			name: "Amazon Music",
			url: "https://music.amazon.com/albums/B0FD9XJX7J?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_gUPuskVmJJn0P0X9RDaMoT9hk",
			},
			{
			name: "Tidal",
			url: "https://tidal.com/album/442347891/u",
			},
		],
		tracks: [
			{
				title: "Nearer, My God, to Thee",
				style: "Piano Ballad",
			},
			{
				title: "Jesus, the Very Thought of Thee",
				style: "Pop/Rock",
			},
			{
				title: "Jesus, Lover of My Soul",
				style: "Celtic Pop",
			},
			{
				title: "Precious Savior, Dear Redeemer",
				style: "Pop",
				songSlug: "precious-savior-dear-redeemer",
			},
			{
				title: "Come unto Jesus",
				style: "Rock",
			},
			{
				title: "Come, Follow Me",
				style: "Jazz Pop",
			},
			{
				title: "Come, We That Love the Lord",
				style: "Country",
			},
			{
				title: "Be Still, My Soul",
				style: "Pop",
			},
			{
				title: "The Lord My Pasture Will Prepare",
				style: "Ballad",
			},
			{
				title: "Ye Simple Souls Who Stray",
				style: "Yacht Rock",
			},
			{
				title: "How Long, O Lord Most Holy and True",
				style: "Gospel Pop",
			},
			{
				title: "I Know That My Redeemer Lives",
				style: "Surf Rock",
			},
		],
	},
  {
    slug: "a-royal-army",
    title: "A Royal Army",
    subtitle: "Songs of faith and service",
    image: "/albums/a-royal-army.png",
		links: [],
		tracks: [],
  },
  {
    slug: "boundless-grace",
    title: "Boundless Grace",
    subtitle: "Inspirational hymn collection",
    image: "/albums/boundless-grace.png",
		links: [],
		tracks: [],
  },
];
