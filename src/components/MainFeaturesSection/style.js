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
  mobileFullWidthWrapper: {
    width: '100%',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      width: '90%',
      margin: '0 auto',
    },
  },
  mobileWrapper1: {
    marginLeft: '15%',
    marginRight: 'auto',
    display: 'block',

    [`@media (max-width: ${theme.breakpoints.laptop})`]: {
      marginLeft: '10%',
      marginBottom: '60px',
    },
    [`@media (max-width: ${theme.breakpoints.tablet})`]: {
      marginLeft: '7%',
    },
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      marginLeft: '0%',
    },
  },
  mobileWrapper2: {
    marginLeft: 'auto',
    marginRight: 0,
    display: 'flex',
    marginBottom: '60px',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      flexDirection: 'column',
    },
  },
  mobileWrapper3: {
    marginLeft: '0%',
    marginRight: 'auto',
    display: 'flex',
    [`@media (max-width: ${theme.breakpoints.laptop})`]: {
      marginLeft: '0%',
    },
    [`@media (max-width: ${theme.breakpoints.tablet})`]: {
      marginLeft: '0%',
    },
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      marginLeft: '0%',
      flexDirection: 'column',
    },
  },
  mobileWrapper4: {
    marginRight: 0,
    display: 'flex',
  },
  mobileImage: {
    width: '100%',
    maxWidth: '250px',
    display: 'block',
    boxShadow: '0 30px 40px 10px rgba(0,0,0,0.22)',
    marginLeft: '30px',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      maxWidth: 'initial',
      margin: '0 auto',
    },
  },
  imageTitle: {
    color: theme.colors.black2,
    fontSize: 'calc(45px + (48 - 40) * (100vw - 400px) / (1200 - 400))',
    fontWeight: 700,
    lineHeight: '150%',
    marginBottom: 30,
    marginTop: '50px',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      marginTop: '50px',
    },
  },
  imageDescription: {
    fontSize: 14,
    fontWeight: 400,
    maxWidth: '350px',
    lineHeight: '190%',
    marginTop: 30,
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      marginBottom: '60px',
      maxWidth: 'initial',
    },
  },
  descriptionOnly: {
    color: theme.colors.black2,
    fontSize: 14,
    fontWeight: 400,
    maxWidth: '500px',
    lineHeight: '190%',
    marginTop: 60,
    [`@media (max-width: ${theme.breakpoints.laptop})`]: {
      marginTop: '60px',
    },
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      marginTop: '0px',
    },
  },
}));

export default useStyles;
