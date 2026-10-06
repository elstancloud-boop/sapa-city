Sapa City ad images
===================
Put advertiser logos/pictures in this folder (PNG or JPG, about 300x160 px works best).

To run an ad:
1. Upload the image here, e.g. ads/mama-tee.png
2. Open ads-config.js and add a line inside ads: [ ... ], for example:
   { spot: 'billboard', city: 'lagos', slot: 'L3', image: 'ads/mama-tee.png', text: 'Mama Tee Foods', link: 'https://wa.me/234XXXXXXXXXX', until: '2026-10-19' },
3. Commit. The ad shows within a minute or two and disappears by itself after the "until" date.

spot:  billboard (slots L1-L8 Lagos, A1-A8 Abuja) | travel | venue (slot = place id, e.g. yahuza) | title
city:  lagos | abuja | all
