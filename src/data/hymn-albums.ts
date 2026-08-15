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
		links: [
			{
				name: "YouTube Lyric Videos",
				url: "https://www.youtube.com/playlist?list=PLHfoT_AcfQVg",
			},
			{
				name: "Spotify",
				url: "https://open.spotify.com/album/5PUQtHwAmD4tIW2FV6Eg6x",
			},
			{
				name: "Apple Music",
				url: "https://music.apple.com/us/album/childrens-songbook-reimagined/1805332998?uo=4",
			},
			{
				name: "YouTube Music",
				url: "https://music.youtube.com/playlist?list=OLAK5uy_klAc1m__k3In_57hTSv1kwQBNHJ5SWOt8",
			},
			{
				name: "Amazon Music",
				url: "https://music.amazon.com/albums/B0F2YZ86RT?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_kBFwtWiEaouQniz1UidRdh4hG",
			},
			{
				name: "Tidal",
				url: "https://tidal.com/album/427023075/u",
			},
		],
		tracks: [
			{ title: "Jesus Wants Me For A Sunbeam", style: "Country" },
			{ title: "Can A Little Child Like Me?", style: "Ballad" },
			{ title: "Tell Me The Stories Of Jesus", style: "Island" },
			{ title: "All Things Bright and Beautiful", style: "Pop" },
			{ title: "If With All Your Hearts", style: "Celtic" },
			{ title: "Jesus Once Was A Little Child", style: "Rock" },
			{ title: "Beauty Everywhere", style: "Acapella" },
			{ title: "Thanks to Our Father", style: "Country" },
			{ title: "The Wise Man and the Foolish Man", style: "Pop" },
			{ title: "Tell Me, Dear Lord", style: "Ballad" },
			{ title: "Shine On", style: "Pop" },
			{ title: "I Think When I Read That Sweet Story", style: "Island" },
			{ title: "Stand For The Right", style: "Country" },
			{ title: "Thank Thee, Father", style: "Acapella" },
			{ title: "Dare To Do Right", style: "Rock" },
			{ title: "Heavenly Father, Now I Pray", style: "Ballad" },
			{ title: "Lift Up Your Voice And Sing", style: "Country" },
			{ title: "The Dearest Names", style: "Celtic" },
			{ title: "Saturday", style: "Pop" },
		],
  },
	{
		slug: "ever-near",
		title: "Ever Near",
		subtitle: "Hymns of faith, peace & trust in our Savior",
		image: "/albums/ever-near.png",
		links: [
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
				title: "Nearer, My God, To Thee",
				style: "Piano Ballad",
				songSlug: "nearer-my-god-to-thee-piano-ballad",
			},
			{
				title: "Jesus, the Very Thought of Thee",
				style: "Pop/Rock",
				songSlug: "jesus-the-very-thought-of-thee",
			},
			{
				title: "Jesus, Lover of My Soul",
				style: "Celtic Pop",
				songSlug: "jesus-lover-of-my-soul",
			},
			{
				title: "Precious Savior, Dear Redeemer",
				style: "Pop",
				songSlug: "precious-savior-dear-redeemer",
			},
			{
				title: "Come unto Jesus",
				style: "Rock",
				songSlug: "come-unto-jesus",
			},
			{
				title: "Come, Follow Me",
				style: "Jazz Pop",
				songSlug: "come-follow-me",
			},
			{
				title: "Come, We That Love the Lord",
				style: "Country",
				songSlug: "come-we-that-love-the-lord",
			},
			{
				title: "Be Still, My Soul",
				style: "Pop",
				songSlug: "be-still-my-soul",
			},
			{
				title: "The Lord My Pasture Will Prepare",
				style: "Ballad",
				songSlug: "the-lord-my-pasture-will-prepare",
			},
			{
				title: "Ye Simple Souls Who Stray",
				style: "Yacht Rock",
				songSlug: "ye-simple-souls-who-stray",
			},
			{
				title: "How Long, O Lord Most Holy and True",
				style: "Gospel Pop",
				songSlug: "how-long-o-lord-most-holy-and-true",
			},
			{
				title: "I Know That My Redeemer Lives",
				style: "Surf Rock",
				songSlug: "i-know-that-my-redeemer-lives",
			},
		],
	},
  {
    slug: "a-royal-army",
    title: "A Royal Army",
    subtitle: "Songs of faith and service",
    image: "/albums/a-royal-army.png",
		links: [
			{
				name: "Spotify",
				url: "https://open.spotify.com/album/6dLIBhdQvfLIzCyydFYfsZ?si=f6ilDUKYSfGRkGD0p6DVVg",
			},
			{
				name: "Apple Music",
				url: "https://music.apple.com/us/album/a-royal-army/1805825127",
			},
			{
				name: "YouTube Music",
				url: "https://music.youtube.com/playlist?list=OLAK5uy_nMsSxwLsoZrnFf7-zQLLV4pLObdk3bLFo&si=g6_dEXwlNIkg5uit",
			},
			{
				name: "Amazon Music",
				url: "https://music.amazon.com/albums/B0F384Z37S?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_Nt4hbcsZ3llWPxxengCJMUVI5",
			},
		],
		tracks: [
			{ title: "Onward, Christian Soldiers", style: "Pop/Rock", songSlug: "onward-christian-soldiers" },
			{ title: "Let Us All Press On", style: "Pop", songSlug: "let-us-all-press-on" },
			{ title: "Behold! A Royal Army", style: "Country", songSlug: "behold-a-royal-army" },
			{ title: "True to the Faith", style: "Pop/Rock", songSlug: "true-to-the-faith" },
			{ title: "Come Along, Come Along", style: "Country", songSlug: "true-to-the-faith" },
			{ title: "Who’s On The Lord’s Side?", style: "Pop", songSlug: "whos-on-the-lords-side" },
			{ title: "Called To Serve", style: "Pop", songSlug: "called-to-serve" },
			{ title: "Hope Of Israel", style: "Celtic", songSlug: "hope-of-israel" },
			{ title: "We Are All Enlisted", style: "Rock", songSlug: "we-are-all-enlisted" },
			{ title: "O Thou Rock Of Our Salvation", style: "Pop", songSlug: "o-thou-rock-of-our-salvation" },
			{ title: "I’ll Go Where You Want Me To Go", style: "Country", songSlug: "ill-go-where-you-want-me-to-go" },
			{ title: "Put Your Shoulder To The Wheel", style: "Pop", songSlug: "put-your-shoulder-to-the-wheel" },
		],
  },
	{
		slug: "boundless-grace",
		title: "Boundless Grace",
		subtitle: "Hymns of grace, trust, and devotion",
		image: "/albums/boundless-grace.png",

		links: [
			{
				name: "Spotify",
				url: "https://open.spotify.com/album/3yZH1s9wJXYcnNjyB2h5Re?si=WcOnpR7mQ6eXzN6eI8vgXA",
			},
			{
				name: "Apple Music",
				url: "https://music.apple.com/us/album/boundless-grace/1876124846",
			},
			{
				name: "YouTube Music",
				url: "https://music.youtube.com/playlist?list=OLAK5uy_kqKAzRp1Wf6oa_v0_DunlDvjC2GvAbGI0&si=mbKMeDaOn3bSJ2IX",
			},
			{
				name: "Amazon Music",
				url: "https://music.amazon.com/albums/B0GMGZYF3G?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_mP8Yambw9GB4A0CKeN8fIvg3S",
			},
			{
				name: "Tidal",
				url: "https://tidal.com/album/497402850/u",
			},
		],

		tracks: [
			{
				title: "Come, Thou Fount of Every Blessing",
				style: "Pop/Country",
			},
			{
				title: "Amazing Grace",
				style: "Classic Rock",
			},
			{
				title: "My Shepherd Will Supply My Need",
				style: "80's Ballad",
			},
			{
				title: "The Lord’s My Shepherd",
				style: "Country Ballad",
			},
			{
				title: "His Eye Is on the Sparrow",
				style: "Pop/Country",
			},
			{
				title: "Softly and Tenderly Jesus Is Calling",
				style: "Surf Rock",
			},
			{
				title: "Take My Heart and Let It Be Consecrated",
				style: "Acapella",
			},
			{
				title: "Standing on the Promises",
				style: "Rock",
			},
			{
				title: "It Is Well with My Soul",
				style: "Orchestral Worship",
			},
			{
				title: "This Little Light of Mine",
				style: "Pop/Rock",
			},
			{
				title: "His Voice as the Sound",
				style: "Power Ballad",
			},
		],
	},
];
