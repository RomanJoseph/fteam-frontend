export interface PokemonListItem {
	name: string;
	url: string;
}

export interface PokemonListResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonListItem[];
}

export interface PokemonDetail {
	id: number;
	name: string;
	height: number;
	weight: number;
	sprites: {
		front_default: string;
		other?: {
			"official-artwork"?: {
				front_default: string;
			};
		};
	};
	species: {
		name: string;
		url: string;
	};
	stats: {
		base_stat: number;
		effort: number;
		stat: {
			name: string;
			url: string;
		};
	}[];
	types: {
		slot: number;
		type: {
			name: string;
			url: string;
		};
	}[];
}
