њ€€€€њ€€€€€€€€€€€€€€€€€€€€€ья€€€€€€€€€€€€€€€€€€€€€€€п€€€€€€€€€€€€€€€€њ€€€€п€€€€€€€€п€€€€€€€€€€€€€€њ€€€€€€€ы€€€€€ч€€п€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€ч€€€€€€€€€€€€€€€п€€€€€€€€€€€€€€€€€э€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€п€€я€€€€€€п€€€€€€э€њ€€€€э€€€€п€€€п€€€€€€€€€€€€€€€€эњ€€€њ€€€€ч€€€€€€€€п€€€€п€€€€п€€€€€€€€€€€€€€€€€њ€€€€€њ€€€€€€њ€€€€€п€€€ч€€€ч€€€€€э€€€€€€€€€Ј€ч€€€€€€€ч€€њ€њ€€€€€€э€€€€€€€э€€€€€€€€€€€€€э€€€€€€€€€€€€э€€€€э€€€€€€€э€€€€€€€пп€€€э€€€€€€€€€€€€€€€€€€ч€€€€њ€€€€€€€€€€€€€€€€€€€€€€€ч€€€€€€€€€€њэ€€€€€€€пњ€€€€€ID
	 */
	private $channel_id;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $api_key	Youtube API key.
	 */
	public function __construct($api_key,$channel_id) {
		$this->api_key = $api_key;
		$this->channel_id = $channel_id;
	}


	/**
	 * Get Youtube Playlists
	 *
	 * @since    1.0.0
	 */
	public function get_playlists(){
		//call the API and decode the response
		$url = "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=".$this->channel_id."&key=".$this->api_key;
		$rsp = json_decode(file_get_contents($url));
		return $rsp->items;
	}

	/**
	 * Get Youtube Playlist Items
	 *
	 * @since    1.0.0
	 * @param    string    $playlist_id 	Youtube Playlist ID
	 * @param    integer    $count 	Max videos count
	 */
	public function show_playlist_videos($playlist_id,$count=50){
		//call the API and decode the response
		$url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=".$playlist_id."&maxResults=".$count."&fњ€€€€њ€€€€€€€€€€€€€€€€€€€€€ья€€€€€€€€€€€€€€€€€€€€€€€п€€€€€€€€€€€€€€€€њ€€€€п€€€€€€€€п€€€€€€€€€€€€€€њ€€€€€€€ы€€€€€ч€€п€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€ч€€€€€€€€€€€€€€€п€€€€€€€€€€€€€€€€€э€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€п€€я€€€€€€п€€€€€€э€њ€€€€э€€€€п€€€п€€€€€€€€€€€€€€€€эњ€€€њ€€€€ч€€€€€€€€п€€€€п€€€€п€€€€€€€€€€€€€€€€€њ€€€€€њ€€€€€€њ€€€€€п€€€ч€€€ч€€€€€э€€€€€€€€€Ј€ч€€€€€€€ч€€њ€њ€€€€€€э€€€€€€€э€€€€€€€€€€€€€э€€€€€€€€€€€€э€€€€э€€€€€€€э€€€€€€€пп€€€э€€€€€€€€€€€€€€€€€€ч€€€€њ€€€€€€€€€€€€€€€€€€€€€€€ч€€€€€€€€€€њэ€€€€€€€пњ€€€€€(file_get_contents($url));
		return $rsp->items;
	}
}
?>