import Sidebar from "../components/sidebar"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { makeStyles } from "@mui/styles";
import clsx from 'clsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const steps = [
  'Welcome to Turing',
  'Take the work experience survey',
  'Pass your 1st test',
  'Pass a tech stack to unlock the coding challenge'
];

export default function Home() {
  const useStyles = makeStyles(() => ({
    root: {
      padding: 6,
      borderRadius: '50%',
      display: 'flex',
      backgroundColor: 'gray',
    },
    active: {
      padding: 6,
      borderRadius: '50%',
      display: 'flex',
      backgroundColor: '#1890ff',
    },
    completed: {
      backgroundColor: '#1890ff',
    },
    check: {
      fontSize: '12px',
      color: 'white'
    },
  }));

  const CustomStepIcon = (props) => {
    const classes = useStyles();
    const { active, completed } = props;

    const stepIcons = {
      1: completed === true ? <FontAwesomeIcon icon={faCheck} className={classes.check} /> : <Box className={active ? classes.active : classes.root} />,
      2: completed === true ? <FontAwesomeIcon icon={faCheck} className={classes.check} /> : <Box className={active ? classes.active : classes.root} />,
      3: completed === true ? <FontAwesomeIcon icon={faCheck} className={classes.check} /> : <Box className={active ? classes.active : classes.root} />,
      4: completed === true ? <FontAwesomeIcon icon={faCheck} className={classes.check} /> : <Box className={active ? classes.active : classes.root} />,
    };

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {stepIcons[String(props.icon)]}
      </div>
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-4/5 bg-primary-100 px-24 py-16">
        <div className="bg-white px-6 py-4">
          <p>Test Progress</p>
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel
                    StepIconComponent={CustomStepIcon}
                    sx={{

                    }}>{label}</StepLabel>
                  {/* >{label}</StepLabel> */}
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
      </div>
    </div >
  )
}
