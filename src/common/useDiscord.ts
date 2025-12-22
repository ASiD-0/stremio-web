// Copyright (C) 2017-2025 Smart code 203358507

import { useCallback, useEffect, useState } from 'react';
import { useServices } from 'stremio/services';

type Service = {
    available: boolean;
    connected: boolean;
    connect: () => void;
    disconnect: () => void;
    setActivity: (state: string, details: string, image?: string, startTimestamp?: number) => void;
    clearActivity: () => void;
    on: (name: string, listener: (data: unknown) => void) => void;
    off: (name: string, listener: (data: unknown) => void) => void;
};

type Result = {
    available: boolean;
    connected: boolean;
    connect: () => void;
    disconnect: () => void;
    setActivity: (state: string, details: string, image?: string, startTimestamp?: number) => void;
    clearActivity: () => void;
};

const useDiscord = (): Result => {
    const { discord } = useServices() as { discord?: Service };
    const [connected, setConnected] = useState(discord?.connected ?? false);

    useEffect(() => {
        if (!discord) return;

        const onStatusChanged = (isConnected: boolean) => {
            setConnected(isConnected);
        };

        discord.on('statusChanged', onStatusChanged as (data: unknown) => void);

        return () => {
            discord.off('statusChanged', onStatusChanged as (data: unknown) => void);
        };
    }, [discord]);

    const connect = useCallback(() => {
        if (discord) {
            discord.connect();
        }
    }, [discord]);

    const disconnect = useCallback(() => {
        if (discord) {
            discord.disconnect();
        }
    }, [discord]);

    const setActivity = useCallback((
        state: string,
        details: string,
        image?: string,
        startTimestamp?: number
    ) => {
        if (discord) {
            discord.setActivity(state, details, image, startTimestamp);
        }
    }, [discord]);

    const clearActivity = useCallback(() => {
        if (discord) {
            discord.clearActivity();
        }
    }, [discord]);

    return {
        available: discord?.available ?? false,
        connected,
        connect,
        disconnect,
        setActivity,
        clearActivity
    };
};

export default useDiscord;
