import { useState } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import clsx from 'clsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


export default function StepperComp() {
    const [percentage, setPercentage] = useState(25);

    const steps = [
        'Welcome to Turing',
        'Take the work experience survey',
        'Pass your 1st test',
        'Pass a tech stack to unlock the coding challenge'
    ];

    const useStyles = makeStyles(() => ({
        root: {
            height: 24,
            width: 24,
            margin: -2,
            borderRadius: '50%',
            backgroundColor: '#eeeeee',
            border: '2px solid gray',
            zIndex: '1',
            display: 'flex',
        },
        active: {
            borderRadius: '50%',
            backgroundColor: '#eeeeee',
            border: '2px solid #1890ff',
            margin: 0,
        },
        completed: {
            backgroundColor: '#1890ff',
            border: 'none',
            display: 'flex-column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
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
            1: completed ? <FontAwesomeIcon icon={faCheck} /> : <Box />,
            2: completed ? <FontAwesomeIcon icon={faCheck} /> : <Box />,
            3: completed ? <FontAwesomeIcon icon={faCheck} /> : <Box />,
            4: completed ? <FontAwesomeIcon icon={faCheck} /> : <Box />,
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

    const CustomConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 6,
            left: "calc(-50%)",
            right: "calc(50%)",
            zIndex: 0,
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: "#1890ff",
                borderTopWidth: 10,
            }
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: "#1890ff",
                borderTopWidth: 10,
            }
        },
        [`& .${stepConnectorClasses.line}`]: {
            borderColor:
                theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
            borderTopWidth: 10,
            borderRadius: 1
        }
    }));


    return (
        <div className="bg-white px-6 py-8 border-gray-200 border-1 rounded-lg shadow-sm">
            <p className="text-2xl font-medium mb-8 text-gray-900">Tests Progress <span className="text-gray-400">{percentage}%</span></p>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={1} alternativeLabel connector={<CustomConnector />}>
                    {steps.map((label, index) => (
                        <Step key={index}>
                            <div className="">
                                <StepLabel
                                    StepIconComponent={CustomStepIcon}
                                >{label}</StepLabel>
                            </div>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </div>
    )
}
