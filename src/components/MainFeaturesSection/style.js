import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  section: {
    padding: '0 7%',
    [`@media (max-width: ${theme.breakpoints.laptop})`]: {
      padding: '0 5%',
    },
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      padding: '0 1%',
    },
  },
  wrapper: {
    maxWidth: '1398px',
    margin: '0 auto',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 60,
    paddingTop: 60,
  },
  topWrapper: {
    width: '100%',
    display: 'flex',
    [`@media (max-width: ${theme.breakpoints.laptop})`]: {
      flexDirection: 'column',
    },
  },
  topInner: {
    width: '50%',
    padding: '0 15px',
    [`@media (max-width: ${theme.breakpoints.laptop})`]: {
      width: '100%',
    },
  },
  mainTitle: {
    fontSize: 80,
    color: theme.colors.black,
    fontWeight: 800,
    fontStyle: 'normal',
    lineHeight: '130% !important',
    marginBottom: 30,
    [`@media (max-width: ${theme.breakpoints.laptop})`]: {
      fontSize: 'calc(45px + (80 - 45) * (100vw - 400px) / (1200 - 400))',

    },
  },
  topParagraph: {
    color: theme.colors.black2,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '190%',
    marginBottom: 30,
  },

}));

export default useStyles;
