import React from "react";
import {Box, Grid, Stack} from "@mui/material";
import GitHubLogo from './../assets/GitHubLogo.png'
import LinkedInLogo from './../assets/LinkedInLogo.png'
import ProfilePicture from './../assets/ProfilePicture.png'

export function LandingScreen() {
    return (
        <Stack direction={'column'}>
            <Stack direction={'row'} justifyContent={'flex-end'}>
                <img src={LinkedInLogo} alt='LinkedIn'/>
                <img src={GitHubLogo} alt='GitHub'/>
            </Stack>
            <Grid container direction={'row'} justifyContent={'center'} alignItems={'flex-start'} spacing={5}>
                <Grid item width={'50vw'}>
                    <img src={ProfilePicture} alt='Profile picture'/>
                </Grid>
                <Grid item width={'50vw'}>
                    <h1> Hi there.</h1>
                    <span>
                        This is a funny self-description of myself, my passions, my occupation as a software engineer and student, as well as my skills and (learning) goals. This is a funny self-description of myself, my passions, my occupation as a software engineer and student, as well as my skills and (learning) goals.
                    </span>
                </Grid>
            </Grid>
        </Stack>
    );
}