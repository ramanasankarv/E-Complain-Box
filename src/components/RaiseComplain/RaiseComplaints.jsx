import { Grid, Typography } from '@mui/material';
import React, { useState,useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PublicIcon from '@mui/icons-material/Public';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import FlashAutoIcon from '@mui/icons-material/FlashAuto';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import { imageupload } from "../../redux/actions/auth";
import { connect } from 'react-redux';
import { Link, useHistory } from "react-router-dom"

const Input = styled('input')({
    display: 'none',
  });

function RaiseComplaints({ auth }) {

    const [error, setError] = useState("")
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const history = useHistory()
    //currentUser.getIdToken(true).then((idToken) => {console.log(idToken)});
    const [deparment, setDeparment] = React.useState('');
    const [age, setAge] = React.useState('');
    const [complainType, setComplainType] = React.useState('');
    const [severity, setSeverity] = React.useState('');
    const [city, setCity] = React.useState('');
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };

    const handleStateChange = (event) =>{
        setCity(event.target.value);
    };

    const  handleChange = (event) => {
        setDeparment(event.target.value);
    };

    const  handleComplainTypeChange = (event) => {
        setComplainType(event.target.value);
    };
    const handleImageChange = async e => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
    };
    const handleSeverityTypeChange = (event) => {
        setSeverity(event.target.value);
    };
    const handleSubmit = async (e) => {
        console.log(images)
        console.log(city)
        console.log(deparment)
        console.log(complainType)
        var content=editorRef.current.getContent();
        await new Promise((r) => setTimeout(imageupload({images,city,deparment,complainType,severity,content}, history)));
    };
    return (
        <Grid item container px={30} py={8}>
            <Grid item container py={2} style={{backgroundColor:"#2B7A78"}}>
                <Typography px={2} style={{color:"#fff",fontWeight:"bolder"}}>
                    Todays Records
                </Typography>
            </Grid>
            <Grid item container style={{background:"#fff"}} py={4} px={4} direction="row" alignItems="center">
                <Grid item md={.5} sm={1} xs={2} mt={2}>
                    <PublicIcon/>
                </Grid>
                <Grid item md={11} sm={10.5} xs={9.5}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth >
                        <InputLabel id="demo-simple-select-standard-label">Select Your City</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={city}
                        onChange={handleStateChange}
                        label="Select Your City"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"uTrinC9Mb1xUJp7hBhFs"}>Bulandshahar</MenuItem>
                        <MenuItem value={"XNYE2aGK1QP6y7TFEo4t"}>Ghaziabad</MenuItem>
                        <MenuItem value={"kudlyUz1YV3mb5x8UewP"}>Kanpur</MenuItem>
                        <MenuItem value={"xk9a1yaOSn4eYLHCcRzY"}>Meerut</MenuItem>
                        <MenuItem value={"LcbMsHmo3vlyZBtVRISp"}>Muzaffarnagar</MenuItem>
                        <MenuItem value={"Lrgd20uPHAmjs0BgvTBO"}>Noida</MenuItem>
                        <MenuItem value={"oqc4tQFg2vNzwuTfEUWR"}>Saharanpur</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid> 
            <Grid item container style={{background:"#fff"}} py={4} px={4} direction="row" alignItems="center">
                <Grid item md={.5} sm={1} xs={2}>
                    <WarningAmberIcon/>
                </Grid>
                <Grid item md={11} sm={10.5} xs={9.5}>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="complainType" onChange={handleComplainTypeChange} name="complainType">
                        <FormLabel component="legend" style={{marginRight:"15px",marginTop:"10px"}}>Complain Type:</FormLabel>
                        <FormControlLabel value="public" control={<Radio />}  label="Public" />
                        <FormControlLabel value="private" control={<Radio />}  label="Private" />
                    </RadioGroup>
                </FormControl>
                </Grid>
            </Grid>  
            <Grid item container style={{background:"#fff"}} py={4} px={4} direction="row" alignItems="center">
                <Grid md={.5} sm={1} xs={2}>
                    <FlashAutoIcon/>
                </Grid>
                <Grid md={11} sm={10.5} xs={9.5}>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="severity" onChange={handleSeverityTypeChange} name="severity">
                        <FormLabel component="legend" style={{marginRight:"15px",marginTop:"10px"}}>Severity:</FormLabel>
                        <FormControlLabel value="high" control={<Radio />}  label="Hign" />
                        <FormControlLabel value="medium" control={<Radio />}  label="Medium" />
                        <FormControlLabel value="low" control={<Radio />} label="Low" />
                    </RadioGroup>
                </FormControl>
                </Grid>
            </Grid> 
            <Grid item container style={{background:"#fff"}} py={4} px={4} direction="row" alignItems="center">
                <Grid item md={.5} sm={1} xs={2} mt={2}>
                    <WorkOutlineIcon/>
                </Grid>
                <Grid item md={11} sm={10.5} xs={9.5}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth >
                        <InputLabel id="demo-simple-select-standard-label">Select Your Department</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={deparment}
                        onChange={handleChange}
                        label="Select Your State"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'6VrJzEXTR7WHBulqNDWP'}>Minority Welfare</MenuItem>
                        <MenuItem value={'Gb3z3ZQCLhKjD7pzgNZP'}>Agriculture</MenuItem>
                        <MenuItem value={'CBBIARsd1YKnkxD23P5V'}>Commecial Tax</MenuItem>

                        <MenuItem value={'JxWoAzlKXQWMFwJf4lbE'}>Women & Child Caree</MenuItem>
                        <MenuItem value={'Oxf0szUJ7pSeuoDfPsZi'}>Mines</MenuItem>
                        <MenuItem value={'WB1ae51Oqmj5NWr2iPZ5'}>Healthx</MenuItem>

                        <MenuItem value={'WfVCykHbeym4z5tDOkTv'}>Police</MenuItem>
                        <MenuItem value={'eIdRA3fc4DjWQExyuTnP'}>Backward Welfare</MenuItem>
                        <MenuItem value={'hRLEQdeY7i9Q04AGEllW'}>Electricity</MenuItem>

                        <MenuItem value={'kIzRUuKsMD4I8TWSnOOF'}>Road & Transportation</MenuItem>
                        <MenuItem value={'nsgvszjIilWddwNmFsHy'}>Technical Education</MenuItem>
                        <MenuItem value={'nwSV5YsEQXmYbOtBodPx'}>Primary Education</MenuItem>

                        <MenuItem value={'wPxaRdNrieG7BJbOOUNm'}>Excise</MenuItem>
                        <MenuItem value={'wcyuQ8BHs5yKJKNPr2Ls'}>Election</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid> 
            <Grid item container style={{background:"#fff"}} py={4} px={4} direction="row" alignItems="start">
                <Grid item md={.5} sm={1} xs={2} mt={2}>
                    <FormatTextdirectionLToRIcon/>
                </Grid>
                <Grid item md={11} sm={10.5} xs={9.5}>
                <Editor
                    apiKey="dd83bg0e7v7jnnfjjqwg7bktooeb1n4wcn2vn7vmeaof51y5"
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                </Grid>
            </Grid>
            <Grid item container style={{background:"#fff"}} py={4} px={4} direction="row" justifyContent="center">
                <Stack direction="row" justifyContent="center" spacing={2}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" onChange={handleImageChange} multiple type="file" />
                        <Button variant="contained" component="span">
                        Upload
                        </Button>
                    </label>
                    <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file" />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                        </IconButton>
                    </label>
                </Stack>
            </Grid>  
            <Grid item container style={{background:"#fff"}} py={4} px={4} direction="row" alignItems="center">
                <Button 
                    onClick={handleSubmit}
                    style={{color:"#fff"}}
                    type="submit"
                    fullWidth
                    variant="contained"
                >
                    Submit
                </Button>
            </Grid>
        </Grid>
    );
}

export default RaiseComplaints;