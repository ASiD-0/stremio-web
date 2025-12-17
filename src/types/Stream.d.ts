
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
    subtitleSize?: number;
    subtitleOffset?: number;
    audioTrack?: StreamAudioTrack;
    playbackSpeed?: number;
    playerType?: string;
};

type StreamSubtitleTrack = {
    id: string;
    embedded: boolean;
    language?: string;
};

type StreamAudioTrack = {
    id: string;
    language?: string;
};
