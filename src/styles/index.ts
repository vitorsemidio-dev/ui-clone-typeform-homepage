import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main`
    .first {
        overflow: hidden;
        background: red;

        .offset {}

        .a {
            background: aqua;
        }
        .b {
            background: darkblue;
        }
        .c {
            background: blue;
        }
    }

    .second {
        background: green;
    }

    .third {
        background: yellow;
    }

    .fourth {
        background: purple;
    }
`;

export const Section = styled.section`
    position: relative;
`;

export const Sticky = styled(motion.div)`
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`;