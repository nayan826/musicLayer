import Euphoria from './songs/Euphoria.mp3';
import SomeNights from './songs/FUN - SOME NIGHTS.mp3';
import WeAreYoung from './songs/FUN - WE ARE YOUNG.mp3';
import Serendipity from './songs/Serendipity.mp3';

export const songslist = [ {
	"title": "Some Nights",
	"artist": "Fun",
	"year_released": 2013,
	"songs": [{
		"id" : 1,
			"title": "Some Nights",
			"length": 4.42,
			"source": SomeNights
		},
		{
			"id" : 2,
			"title": "We are young",
			"length": 4.17,
			"source": WeAreYoung
		}
	]
}, {
	"title": "Love Yourself",
	"artist": "BTS",
	"year_released": 2017,
	"songs": [{
		"id" : 1,
			"title": "Euphoria",
			"length": 3.49,
			"source": Euphoria
		},
		{
			"id" : 2,
			"title": "Serendipity",
			"length": 4.36,
			"source": Serendipity
		}
			
	]
}]