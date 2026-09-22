export type AssetType = "Characters" | "Scenes" | "Props" | "Wardrobe" | "Creatures" | "Vehicles" | "Other";
export type AssetStatus = "Ready" | "Review" | "Draft" | "Archived";
export type Asset = {
  id: number;
  name: string;
  type: AssetType;
  image: string;
  tags: string[];
  status: AssetStatus;
  project: string;
  used: number;
  created: string;
  updated: string;
  uploadedBy: string;
  description: string;
  favorite: boolean;
};

const images = [
  "photo-1560250097-0b93528c311a", "photo-1568602471122-7832951cc4c5", "photo-1511818966892-d7d671e672a2", "photo-1504707748692-419802cf939d", "photo-1500534623283-312aade485b7", "photo-1519608487953-e999c86e7455", "photo-1544717305-2782549b5136", "photo-1518005020951-eccb494ad742", "photo-1542291026-7eec264c27ff", "photo-1489824904134-891ab64532f1", "photo-1518173946687-a4c8892bbd9f", "photo-1534972195531-d756b9bfa9f2"
];

const names: [string, AssetType, string[], AssetStatus, string, string][] = [
  ["Mafia Boss", "Characters", ["Mafia", "Male", "Black Suit", "Powerful"], "Ready", "Mafia", "A commanding crime-family lead in a black tailored suit, used as the primary male character for night interiors."],
  ["Young Woman", "Characters", ["Female", "Modern", "Portrait", "Realistic"], "Ready", "Doomsday", "A realistic modern female portrait for close-ups and dialogue scenes in the Doomsday series."],
  ["Police Officer", "Characters", ["Uniform", "Male", "Modern"], "Review", "Mafia", "A male officer in a contemporary uniform, pending review for street and station sequences."],
  ["Desert Scout", "Characters", ["Explorer", "Desert", "Future"], "Ready", "Doomsday", "A future desert explorer with weathered gear, built for wide establishing shots and survival beats."],
  ["Mafia Office at Night", "Scenes", ["Dark", "Office", "Mafia", "Night"], "Ready", "Mafia", "A dark wood-paneled office at night with low practical lights, the main set for negotiations."],
  ["Old Warehouse", "Scenes", ["Industrial", "Abandoned", "Dark"], "Review", "Mafia", "An abandoned industrial warehouse with broken windows and stacked crates, currently in review."],
  ["Modern Apartment", "Scenes", ["Interior", "Modern", "Daylight"], "Ready", "School", "A daylight modern apartment interior with clean lines, used for everyday character scenes."],
  ["Desert Camp", "Scenes", ["Desert", "Camp", "Sunset"], "Draft", "Doomsday", "A sunset desert camp still in draft, with tents, dust, and long golden-hour shadows."],
  ["Black Axe", "Props", ["Weapon", "Metal", "Vintage", "Wood"], "Ready", "Mafia", "A vintage black axe with a wood handle, hero prop for close-ups and action inserts."],
  ["Military Rifle", "Props", ["Weapon", "Military", "Modern"], "Review", "Doomsday", "A modern military rifle awaiting review before it can be used in combat coverage."],
  ["Leather Briefcase", "Props", ["Business", "Leather", "Mafia"], "Ready", "Mafia", "A worn leather briefcase for business meetings and payoff exchanges."],
  ["Ancient Scroll", "Props", ["Paper", "Ancient", "Chinese"], "Ready", "Journey to the West", "An aged Chinese paper scroll with calligraphy, used as a story and insert prop."],
  ["Black Tailored Suit", "Wardrobe", ["Formal", "Black", "Mafia"], "Ready", "Mafia", "A formal black tailored suit, the signature wardrobe look for the crime-family leads."],
  ["School Uniform", "Wardrobe", ["Uniform", "Youth", "Modern"], "Ready", "School", "A modern youth school uniform for classroom and campus scenes."],
  ["Desert Jacket", "Wardrobe", ["Utility", "Sand", "Future"], "Draft", "Doomsday", "A sand-colored utility jacket still in draft, designed for the future desert look."],
  ["Silk Robe", "Wardrobe", ["Ancient", "Chinese", "Gold"], "Ready", "Journey to the West", "A gold-trimmed ancient Chinese silk robe for ceremonial and court sequences."],
  ["Shadow Wolf", "Creatures", ["Wolf", "Dark", "Fantasy"], "Ready", "Doomsday", "A dark fantasy wolf with shadowed fur, used as a recurring creature in night sequences."],
  ["Golden Dragon", "Creatures", ["Dragon", "Mythical", "Chinese"], "Review", "Journey to the West", "A mythical Chinese golden dragon currently in review for VFX plate matching."],
  ["Desert Falcon", "Creatures", ["Bird", "Desert", "Wildlife"], "Ready", "Doomsday", "A desert wildlife falcon for aerial cutaways and scout companion shots."],
  ["Stone Golem", "Creatures", ["Rock", "Fantasy", "Ancient"], "Archived", "Journey to the West", "An ancient stone golem archived after the temple sequence was cut."],
  ["Vintage Sedan", "Vehicles", ["Car", "Vintage", "Black", "Mafia"], "Ready", "Mafia", "A black vintage sedan for night street arrivals and chase establishing shots."],
  ["Police Cruiser", "Vehicles", ["Car", "Police", "Modern"], "Ready", "School", "A modern police cruiser for campus perimeter and city street coverage."],
  ["Desert Rover", "Vehicles", ["Truck", "Desert", "Future"], "Review", "Doomsday", "A future desert truck in review, designed for long-distance survival travel."],
  ["Flying Lantern", "Vehicles", ["Fantasy", "Ancient", "Chinese"], "Ready", "Journey to the West", "A fantasy flying lantern craft used as an aerial vehicle in ancient city shots."],
  ["Night Club Entrance", "Scenes", ["Neon", "Mafia", "Night"], "Ready", "Mafia", "A neon nightclub entrance with wet pavement reflections for nightlife scenes."],
  ["Street Vendor", "Characters", ["Male", "Urban", "Modern"], "Ready", "School", "An urban male street vendor for city background and neighborhood texture."],
  ["Brass Pocket Watch", "Props", ["Vintage", "Gold", "Mafia"], "Draft", "Mafia", "A gold vintage pocket watch still in draft, intended as a character heirloom insert."],
  ["Combat Boots", "Wardrobe", ["Military", "Black", "Modern"], "Ready", "Doomsday", "Black modern military combat boots for costume continuity on the scout unit."],
  ["White Tiger", "Creatures", ["Tiger", "Fantasy", "White"], "Ready", "Journey to the West", "A white fantasy tiger used as a guardian creature in temple and forest scenes."],
  ["Armored Van", "Vehicles", ["Military", "Vehicle", "Black"], "Ready", "Doomsday", "A black armored military van for convoy and extraction sequences."],
  ["Storyboard Pack", "Other", ["Reference", "Boards", "Production"], "Ready", "School", "A production reference pack of storyboard frames, stored as a non-visual-type asset."],
  ["Color Script", "Other", ["Color", "Look", "Reference"], "Draft", "Doomsday", "A draft color-script look reference for desert dusk and night lighting."],
];

export const assets: Asset[] = names.map(([name, type, tags, status, project, description], i) => ({
  id: i + 1,
  name,
  type,
  tags,
  status,
  project,
  description,
  used: (i * 7) % 39 + 1,
  created: i < 8 ? "Today" : `${Math.floor(i / 3) + 1} days ago`,
  updated: i < 4 ? "Today" : `${Math.floor(i / 5) + 1} days ago`,
  uploadedBy: i % 2 ? "David Chen" : "Sofia Martin",
  favorite: i % 7 === 0,
  image: `https://images.unsplash.com/${images[i % images.length]}?auto=format&fit=crop&w=800&q=82`,
}));

export const categories = ["Characters", "Scenes", "Props", "Wardrobe", "Creatures", "Vehicles", "Other"] as AssetType[];
