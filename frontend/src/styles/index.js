import { createGlobalStyle } from 'styled-components';
import BackgroundImg from '../assets/images/background3.jpg'


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: monospace;
        font-weight: normal;
        box-sizing: border-box;
    }   

    html,
    body
    {
        height: 100vh;
        width: 100%;
    }

    #root {
        min-height: 100vh;
        height: fit-content;
        min-width: 100%;
        width: fit-content;
        display: flex;
        color: white;
        // background: #1A1C2C;
        background-image: url(${BackgroundImg});
        background-repeat: no-repeat;
        background-size: cover;
    }

`

export const defaultTheme = {
    // Colors:
    accentColor: '#ED4A5F',
    accentColorDark: '#db374c',
    accentColorLight: '#F06173',
    octoGradientBlueColor: 'linear-gradient(90deg, rgba(0,142,210,1) 1%, rgba(33,246,255,0.9192051820728291) 100%);',
    octoGreen: '#12dea9',
    lightSilver: '#D8D8D8',
    grey: "#7E7E7E",
    mediumGrey: "#BBB7B7",
    mediumGrey60: 'rgb(145, 145, 145, 0.6)',
    octoLightBlue: '#14d1d1',
    octoGradientColor: 'linear-gradient(90deg, rgba(0,142,210,1) 1%, rgba(33,246,255,0.9192051820728291) 100%);',
    octoBlue: '#00ECFF',

    // Background-colors:
    
    backgroundLigthNavy: "#292d3dd3",
    backgroundDarkNavy: "#1A1C2C",

    // BorderRadius
    borderRadius: "6px",

    // Box Shadows:
    boxShadowDark: `-5px 6px 15px 1px rgba(0,0,0,0.50)`,
    boxShadowDarkRight: `5px 6px 10px 1px rgba(0,0,0,0.50)`,
    boxShadowWhiteRight: `5px 6px 10px 1px rgba(255,255,255,0.50)`,
    boxShadowLight: `-5px 6px 15px 1px rgba(0,0,0,0.25)`,
    boxShadowLighter: `-5px 6px 15px 1px rgba(0,0,0,0.15)`,
    boxShadowOcto: `5px 6px 10px 1px rgba(0,236,255,0.50)`,
    boxShadowNav: `2px 0 24px 0 rgba(0,0,0,0.04)`,
    boxShadowTiles: `0 2px 24px 0 rgba(0,0,0,0.04)`,
    boxShadowInTiles: `0 1px 3px 0 rgba(0,0,0,0.2)`,

    // Sizes
    controlHeight: '40px',
    controlHeightMini: '24px',
    controlHeightSmall: '32px',
    controlHeightLarge: '48px',
    spaceXXS: '4px',
    spaceXS: '8px',
    spaceS: '16px',
    spaceM: '24px',
    spaceL: '32px',
    spaceXL: '48px',
    spaceXXL: '220px',

    // Text Size
    textSizeXXL: '32px',
    textSizeXL: '24px',
    textSizeMotionTitle: '22px',
    textSizeL: '20px',
    textSizeM: '15px',
    textSizeDefault: "16px",
    textSizeS: '12px',

    // Text Weight
    textWeightThin: '300',
    textWeightRegular: '400',
    textWeightMedium: '500',
    textWeightBold: '700'

}
