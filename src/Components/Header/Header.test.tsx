import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {Header} from "./Header.tsx";

describe('Header component', async () => {
    it('Should render the header component correctly', async () => {
        // Setup
        render(<Header/>);

        const navBrand = await screen.getByTestId('logo')
        const showPendingTxBtn = await screen.getByTestId('showPendingTransactions')
        const createTxBtn = await screen.getByTestId('createTransaction')

        expect(navBrand).toMatchSnapshot()
        expect(showPendingTxBtn).toMatchSnapshot()
        expect(createTxBtn).toMatchSnapshot()
    });
});
