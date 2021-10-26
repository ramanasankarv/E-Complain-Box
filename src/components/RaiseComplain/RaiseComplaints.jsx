import { Grid, Typography } from '@mui/material';
import React, { useRef } from 'react';
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
const Input = styled('input')({
    display: 'none',
  });
function RaiseComplaints(props) {
    const [age, setAge] = React.useState('');
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };
    const handleChange = (event) => {
        setAge(event.target.value);
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
                        <InputLabel id="demo-simple-select-standard-label">Select Your State</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Select Your State"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
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
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                        <FormLabel component="legend" style={{marginRight:"15px",marginTop:"10px"}}>Complain Type:</FormLabel>
                        <FormControlLabel value="public" control={<Radio />} label="Public" />
                        <FormControlLabel value="private" control={<Radio />} label="Private" />
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
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                        <FormLabel component="legend" style={{marginRight:"15px",marginTop:"10px"}}>Severity:</FormLabel>
                        <FormControlLabel value="high" control={<Radio />} label="Hign" />
                        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
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
                        value={age}
                        onChange={handleChange}
                        label="Select Your State"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
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
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
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
                <Grid item md={.5} sm={1} xs={2} mt={2}>
                    <EditLocationAltIcon/>
                </Grid>
                <Grid item md={11} sm={10.5} xs={9.5}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth >
                        <InputLabel id="demo-simple-select-standard-label">Select Your Department</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Select Your State"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid> 
            <Grid item container style={{background:"#fff"}} py={4} px={4} direction="row" alignItems="center">
                <Button 
                    style={{color:"#fff"}}
                    type="submit"
                    fullWidth
                    variant="contained"
                >
                    Sign In
                </Button>
            </Grid>
        </Grid>
    );
}

export default RaiseComplaints;