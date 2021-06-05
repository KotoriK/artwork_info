/// <reference types="node" />
import { Agent } from 'http';
export default function fetchArtwork(artworkId: number, agent?: Agent | ((parsedUrl: URL) => Agent)): Promise<import("./api").IllustFull>;
