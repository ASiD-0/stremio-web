
type StreamDeepLinks = {
    player: string | null,
    externalPlayer: ExternalPlayerLinks,
};

type Stream = {
    ytId?: string,
    name: string,
    description: string,
    infoHash?: string,
    fileIdx?: string,
    externalUrl?: string,
    deepLinks: {
        player: string,
        externalPlayer: ExternalPlayerLinks,
    },
};

type StreamItemState = {
    subtitleTrack?: StreamSubtitleTrack;
    /**
     * In milliseconds
     */
    subtitleDelay?: number;
    /**
     * Subtitles size, platform-dependent units
     */
    subtitleSize?: number;
    /**
     * Vertical offset of the subtitles, platform-dependent units
     */
    subtitleOffset?: number;
    audioTrack?: StreamAudioTrack;
    /**
     * In milliseconds
     */
    audioDelay?: number;
    playbackSpeed?: number;
    playerType?: string;
};

type StreamSubtitleTrack = {
    /**
     * Id of the subtitle track
     */
    id: string;
    /**
     * Flag indicating whether this is an embedded subtitle or an addon subtitle
     */
    embedded: boolean;
    /**
     * Optional string indicating subtitle language
     */
    language?: string;
};

type StreamAudioTrack = {
    /**
     * Id of the audio track
     */
    id: string;
    /**
     * Optional string indicating audio language
     */
    language?: string;
};
