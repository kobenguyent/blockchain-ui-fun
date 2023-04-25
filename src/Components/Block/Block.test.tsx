import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {Block} from "./Block.tsx";

describe('Block component', async () => {
    it.only('Should render the block component correctly', async () => {
        const setSelectedBlockIndex = (index:any) => {
            return index
        }
        const blockchain = [
            {
                "timestamp": 1682410957432,
                "transactions": [],
                "prevHash": "0",
                "hash": "8a48e33caabc3a1b04a3aee52d9614b1e838fa5e99eac79197ea7fc92c46df99",
                "nonce": 0
            }]
        // Setup
        render(<Block block={blockchain} setSelectedBlockIndex={setSelectedBlockIndex}/>);

        const h1 = await screen.getByText('Blocks on chain')

        expect(h1).toMatchSnapshot()

    });
});
