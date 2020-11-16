const TransformTracks = (response) => {
	
	const apiToTrack = track => {
		const trackToMap = {
			id: track.id,
			title: track.name,
			artists: track.artists.map(artists => artists.name),
			image: track.album.images[0].url,
			preview: track.preview_url    
		};
		console.log({trackToMap})
		return trackToMap;
	}

	const tracksMapped = (response || []).map(apiToTrack)
	return tracksMapped
	
};

export default TransformTracks;