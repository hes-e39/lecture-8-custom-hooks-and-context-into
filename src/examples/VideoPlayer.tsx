import { useEffect, useRef, useState } from 'react';

function VideoPlayer({ src, isPlaying }: { src: string; isPlaying: boolean }) {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isPlaying) {
            ref.current?.play();
        } else {
            ref.current?.pause();
        }
    }, [isPlaying]);

    return <video loop playsInline muted style={{ width: 400 }} ref={ref} src={src} />;
}

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div>
            <button className="bg-gray-500 p-2 rounded-md" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer isPlaying={isPlaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
        </div>
    );
}
