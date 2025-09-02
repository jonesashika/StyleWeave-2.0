import React from 'react'
import './web.css'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import GamesIcon from '@mui/icons-material/Games';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import GridViewIcon from '@mui/icons-material/GridView';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import UploadIcon from '@mui/icons-material/Upload';
import Card from '@mui/material/Card';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Moon from './assets/Images/moon.jpg'
import Prop from './assets/Images/glass.jpg'
import Curves from './assets/Images/curves.svg'
import { Row } from 'react-bootstrap';
const web = () => {
  return (
    <>
      <Box className='div' >
        <Grid container px={10} py={5} >
          <Grid xs={6}>
            <Stack direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}><img src="../src/assets/imgi_2_logo-letter-9.png" alt="" height={40} />
              <Button><Typography sx={{ color: 'white' }}>Dashboard</Typography></Button>
              <Button><Typography sx={{ color: 'white' }}>Features</Typography></Button>
              <Button><Typography sx={{ color: 'white' }}>Crud</Typography></Button>
              <Button><Typography sx={{ color: 'white' }}>Apps</Typography></Button>
              <Button><Typography sx={{ color: 'white' }}>Pages</Typography></Button>
            </Stack>
          </Grid>
          <Grid xs={6}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={4} ml={10}>
              <SearchIcon sx={{ color: 'white' }} />
              <GamesIcon sx={{ color: 'white' }} />

              <BarChartIcon sx={{ color: 'white' }} />
              <ShoppingBasketIcon sx={{ color: 'white' }} />
              <GridViewIcon sx={{ color: 'white' }} />
              <Avatar
                alt=""
                src="data:image/jpeg;base64,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"
                variant='rounded'
                sx={{ width: 24, height: 24 }}
              />
              <Button sx={{ color: "white", textTransform: "none" }}>
                <Typography sx={{ color: "white" }}>Hi,</Typography>
                <Typography sx={{ color: "white" }}>Sean</Typography>
                <Avatar sx={{ bgcolor: "white", borderRadius: 1, color: "black" }} variant="square">S</Avatar>
              </Button>

            </Stack>
          </Grid>


        </Grid>
        <Divider sx={{ backgroundColor: 'white' }} />
        <Grid container>
          <Grid itemm xs={6}>


            <Stack direction="column" alignItems={'start'} justifyContent={'space-between'} px={10} py={5}>

              <Typography sx={{ color: 'white' }}>Dashboard</Typography>
              <Stack direction="row" spacing={4}>
                <UploadIcon sx={{ color: 'white' }} />
                <Typography sx={{ color: 'white' }}>Dashboard </Typography>
                <Typography className="class" sx={{ color: 'white' }} >Latest Updated</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} >
            <Button sx={{ color: "black", textTransform: "none", px: 3 }} style={{ marginLeft: 350, marginTop: 50, backgroundColor: 'white' }}>Report</Button>
            <Button sx={{ color: "black", textTransform: "none", px: 3 }} style={{ marginTop: 50, backgroundColor: 'white', marginLeft: 20 }}>Action</Button>
          </Grid>
        </Grid>
      </Box>
      <Box className='div1'>
        <Grid container px={10} spacing={3} >
          <Stack direction={'row'}>
            <Grid item xs={4}>
              <Card className='card'>
                <Stack direction={'column'} spacing={3}>
                  <Grid container xs={12} style={{ padding: 20 }}>
                    <Grid item xs={11}>
                      <Typography sx={{ color: 'black' }} >Weekly Sales Stats</Typography>
                      <Typography sx={{ color: 'black' }} >890,344 Sales</Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Button><MoreHorizIcon></MoreHorizIcon></Button>
                    </Grid>

                  </Grid>
                  <Grid>
                    <img src="../src/assets/Screenshot 2025-08-02 181754.png" alt="" />
                  </Grid>
                  <Grid style={{ marginTop: 50 }}>
                    <Stack direction={'row'} justifyContent={'space-around'}>
                      <Avatar src="https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/misc/006-plurk.svg"></Avatar>
                      <Stack direction={'column'}>
                        <Typography>Top Authors</Typography>
                        <Typography sx={{ opacity: 0.4 }}>Ricky Hunt, Sandra Trepp</Typography>
                      </Stack>
                      <Avatar variant='square' sx={{ width: 60, height: 30, borderRadius: 1, opacity: 0.3, color: 'black' }}>+105$</Avatar>
                    </Stack>
                  </Grid>

                </Stack>
                <Grid style={{ marginTop: 30 }}>
                  <Stack direction={'row'} justifyContent={'space-around'}>
                    <Avatar variant='square' src="https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/misc/015-telegram.svg"></Avatar>
                    <Stack direction={'column'}>
                      <Typography>Best Sellers</Typography>
                      <Typography sx={{ opacity: 0.4 }}>Pitstop Email Marketing</Typography>
                    </Stack>
                    <Avatar variant='square' sx={{ width: 60, height: 30, borderRadius: 1, opacity: 0.3, color: 'black' }}>+60$</Avatar>
                  </Stack>
                </Grid>
                <Grid style={{ marginTop: 30 }}>
                  <Stack direction={'row'} justifyContent={'space-around'}>
                    <Avatar src="https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/misc/003-puzzle.svg"></Avatar>
                    <Stack direction={'column'}>
                      <Typography>Top Engagement</Typography>
                      <Typography sx={{ opacity: 0.4 }}>KT.com solution provider</Typography>
                    </Stack>
                    <Avatar variant='square' sx={{ width: 60, height: 30, borderRadius: 1, opacity: 0.3, color: 'black' }}>+75$</Avatar>
                  </Stack>
                </Grid>


              </Card>

            </Grid>
            <Grid xs={4} style={{ marginLeft: 25 }}>
              <Stack direction={'column'}>
                <Card className='card1'>
                  <img src={Prop} width={200}height={150} alt="" />
                  <Typography style={{ marginTop: 20, marginLeft: 40 }}>Properties</Typography>

                </Card>
                <Grid>
                  <Stack direction={'row'} gap={3}>
                    <Card className='card3' sx={{ backgroundColor: 'purple' }}>
                      <Typography style={{ marginTop: 30, marginLeft: 20, color: 'white' }}>Create SaaS <br />
                        Based Reports
                        <img src={Curves}height={100}width={230} alt="" />
                      </Typography>
                      <Button sx={{ width: 150, height: 40, backgroundColor: 'aqua', color: 'white' }} style={{ marginTop: 30, marginLeft: 20 }}>Create Report</Button>

                    </Card>
                    <Card className='card6'>
                      <img src={Moon} width={300} alt="" />
                      <Typography style={{ marginTop: 30, marginLeft: 20 }}>Create Reports <br />
                        With App</Typography>

                    </Card>
                  </Stack>
                </Grid>
                <Stack direction={'row'} gap={3}>
                  <Card className='card4' style={{ backgroundColor: 'lightblue', color: 'white' }}>
                    <GridViewIcon style={{ marginTop: 50, marginLeft: 20 }} />
                    <Typography style={{ marginLeft: 20 }}>790</Typography>
                    <Typography style={{ marginLeft: 20 }}>New Products</Typography>

                  </Card>
                  <Card className='card5'>
                    <PeopleAltIcon style={{ marginTop: 50, marginLeft: 20 }} ></PeopleAltIcon>
                    <Typography style={{ marginLeft: 20 }}>8,600</Typography>
                    <Typography style={{ marginLeft: 20 }}>New Customers</Typography>

                  </Card>
                </Stack>
              </Stack>
            </Grid>
            <Grid xs={4} style={{ marginLeft: -480 }} >
              <Card className='card2'>
                <Stack direction={'row'}>
                  <Grid xs={10} px={5} py={5}>
                    <Stack direction={'column'} justifyContent={'space-between'}>
                      <Typography>Create CRM Reports</Typography>
                      <Typography>Generate the latest CRM Report</Typography>
                    </Stack>
                  </Grid>
                  <Grid xs={2} px={0} py={5}>
                    <Stack justifyContent={'flex-end'}>
                      <Button style={{ backgroundColor: 'blue', color: 'white' }}>Start Now</Button>
                    </Stack>
                  </Grid>
                </Stack>
              </Card>

            </Grid>
          </Stack>
        </Grid>

      </Box>
      <Box>
        <Grid px={10} py={5}>
          <Stack direction={'row'} gap={3}>
            <Card className='card8'>
              <Stack direction={'row'} gap={20} marginTop={30} marginLeft={5}>
                <Stack direction={'column'}>
                  <Typography>Average Sale </Typography>
                  $650
                </Stack>
                <Stack direction={'column'}>
                  <Typography>Commission</Typography>
                  $233,660
                </Stack>

              </Stack>
              <Stack direction={'row'} gap={20} marginLeft={5} marginTop={8}>
                <Stack direction={'column'}>
                  <Typography>Annual Taxes </Typography>
                  $29,004
                </Stack>
                <Stack direction={'column'}>
                  <Typography>Annual Income</Typography>
                  $1,480,00
                </Stack>
              </Stack>
            </Card>
            <Card className='card8'>
              <Grid>
                <Stack direction={'row'} gap={20} marginTop={5} marginLeft={5}>
                  <h3>Agents Stats</h3>
                  <Button style={{ backgroundColor: 'teal', opacity: 0.6, color: 'white' }}>Add New Members</Button>

                </Stack>
              </Grid>
              <Grid>
                <Stack direction={'row'} marginTop={5} marginLeft={5} gap={10}>
                  <Grid >
                    <Stack direction={'column'}>
                      <h3 style={{marginLeft:15,opacity:0.5}}>Authors</h3>
                      <Stack direction={'row'}>
                       <Avatar style={{marginTop:20}} src='https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/avatars/024-boy-9.svg'></Avatar>
                      <Stack direction={'column'}>
                      <h3>Brad Simmons</h3>
                      <h5 style={{marginTop:-9,opacity:0.6}}>HTML,JS,ReactJS</h5>
                      </Stack>
                      </Stack> 
                       <Stack direction={'row'}>
                       <Avatar style={{marginTop:0}} src='https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/avatars/018-girl-9.svg'></Avatar>
                      <Stack direction={'column'}>
                      <h3 style={{marginTop:-5}}>Jessie Clarkson</h3>
                      <h5 style={{marginTop:-9,opacity:0.6}}>C#, ASP.NET, MS SQL</h5>
                      </Stack>
                      </Stack> 
                        <Stack direction={'row'}>
                       <Avatar style={{marginTop:0}} src='https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/avatars/047-girl-25.svg'></Avatar>
                      <Stack direction={'column'}>
                      <h3 style={{marginTop:-5}}>Lebron Wayde</h3>
                     <h5 style={{marginTop:-9,opacity:0.6}}>PHP, Laravel, VueJS</h5>
                      </Stack>
                      </Stack> 
                        <Stack direction={'row'}>
                       <Avatar style={{marginTop:0}} src='https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/avatars/014-girl-7.svg'></Avatar>
                      <Stack direction={'column'}>
                      <h3 style={{marginTop:-5}}>Natali Trump</h3>
                      <h5 style={{marginTop:-9,opacity:0.6}}>Python, PostgreSQL, ReactJS</h5>
                      </Stack>
                      </Stack> 
                    </Stack>
                  </Grid>
                  <Grid>
                    <h3 style={{opacity:0.5}}>Company</h3>
                    <Stack>
                      <h3>Intertico</h3>
                      <h5 style={{marginTop:-12,opacity:0.6}}>Web,UI/UX design</h5>
                    </Stack>
                     <Stack marginTop={-3}>
                      <h3>Agoda</h3>
                      <h5 style={{marginTop:-12,opacity:0.6}}>Houses and Hotels</h5>
                    </Stack>
                     <Stack marginTop={-2}>
                      <h3>Roadgee</h3>
                      <h5 style={{marginTop:-12,opacity:0.6}}>Transportation</h5>
                    </Stack>
                     <Stack marginTop={-2}>
                      <h3>The Hill</h3>
                      <h5 style={{marginTop:-12,opacity:0.6}}>Insurance</h5>
                    </Stack>


                  </Grid>

                </Stack>

              </Grid>

            </Card>

          </Stack>
        </Grid>

      </Box>



      <Box>
        <Grid container xs={4} px={10} py={5}>
          <Stack direction={'row'} justifyContent={'space-around'}>
            <Card className='card7'>
              <Stack direction={'row'}>
                <Grid xs={8} px={5} py={5}>
                  <Typography>7 Hours Ago</Typography>

                </Grid>
                <Grid xs={4} px={8} py={5}>

                  <Avatar src="https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/misc/006-plurk.svg"></Avatar>

                </Grid>
              </Stack>
              <Grid px={5}>
                <Stack direction={'column'}>
                  <Typography>PitStop - Multiple Email <br /> Generator </Typography>

                </Stack>

              </Grid>
              <Grid px={5} py={3}>
                <Stack direction={'column'}>
                  <Typography sx={{ opacity: 0.5 }}>Pitstop creates quick email campaigns.
                    We help to strengthen your brand
                    for your every purpose.</Typography>

                </Stack>

              </Grid>
              <Grid>
                <Stack direction={'row'} marginTop={6}>

                  <Grid style={{ marginLeft: 30 }}>

                    <Avatar src='https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/avatars/001-boy.svg '></Avatar>


                  </Grid>
                  <Grid>
                    <Avatar src='https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/avatars/028-girl-16.svg'></Avatar>

                  </Grid>
                  <Grid>
                    <Avatar src='https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/avatars/024-boy-9.svg'></Avatar>
                  </Grid>
                </Stack>
              </Grid>
            </Card>
            <Card className='card7' style={{ marginLeft: 30 }}>
              <Stack direction={'row'}>
                <Grid xs={8} px={5} py={5}>
                  <Typography>2 Days Ago</Typography>

                </Grid>
                <Grid xs={4} px={8} py={5}>

                  <Avatar src="https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/misc/015-telegram.svg"></Avatar>

                </Grid>
              </Stack>
              <Grid px={5}>
                <Stack direction={'column'}>
                  <Typography>Craft - ReactJS Admin <br /> Theme </Typography>

                </Stack>

              </Grid>
              <Grid px={5} py={3}>
                <Stack direction={'column'}>
                  <Typography sx={{ opacity: 0.5 }}>Craft uses the latest and greatest frameworks
                    with ReactJS for complete modernization and
                    future proofing your business operations
                    and sales opportunities</Typography>

                </Stack>

              </Grid>
              <Grid>
                <Stack direction={'row'} >

                  <Grid style={{ marginLeft: 30 }}>

                    <Avatar src='https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/avatars/001-boy.svg '></Avatar>


                  </Grid>
                  <Grid>
                    <Avatar src='https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/avatars/028-girl-16.svg'></Avatar>

                  </Grid>
                  <Grid>
                    <Avatar src='https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/avatars/024-boy-9.svg'></Avatar>
                  </Grid>
                </Stack>
              </Grid>
            </Card>
            <Card className='card7' style={{ marginLeft: 30 }}>
              <Stack direction={'row'}>
                <Grid xs={8} px={5} py={5}>
                  <Typography>5 Weeks Ago</Typography>

                </Grid>
                <Grid xs={4} px={8} py={5}>

                  <Avatar src="https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/misc/003-puzzle.svg"></Avatar>

                </Grid>
              </Stack>
              <Grid px={5}>
                <Stack direction={'column'}>
                  <Typography>KT.com - High Quality <br /> Templates </Typography>

                </Stack>

              </Grid>
              <Grid px={5} py={3}>
                <Stack direction={'column'}>
                  <Typography sx={{ opacity: 0.5 }}>Easy to use, incredibly flexible and secure
                    with in-depth documentation that outlines
                    everything for you</Typography>

                </Stack>

              </Grid>
              <Grid>
                <Stack direction={'row'} marginTop={6}>

                  <Grid style={{ marginLeft: 30 }}>

                    <Avatar src='https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/avatars/001-boy.svg '></Avatar>


                  </Grid>
                  <Grid>
                    <Avatar src='https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/avatars/028-girl-16.svg'></Avatar>

                  </Grid>
                  <Grid>
                    <Avatar src='https://preview.keenthemes.com/metronic/theme/html/demo2/dist/assets/media/svg/avatars/024-boy-9.svg'></Avatar>
                  </Grid>
                </Stack>
              </Grid>
            </Card>



          </Stack>

        </Grid>
      </Box>
      <Box>
        <Grid px={10}>
          <Stack direction={'row'} alignContent={'center'} justifyContent={'space-between'}>
            <Card className='card8' xs={6}>
              <Stack direction={'row'} px={5} py={5} gap={40}>
                <Typography>Notifications</Typography>
                < MoreVertIcon />

              </Stack>
              <Stack direction={'row'} px={5} gap={25}>
                <Stack direction={'column'}>
                  <Typography >Daily Standup Meeting</Typography>
                  <Typography sx={{ opacity: 0.5 }} >Due in 2 Days</Typography>

                </Stack>
                <Typography style={{ width: 90, height: 30, backgroundColor: 'blue', opacity: 0.5, borderRadius: 5, color: 'white' }}>Approved</Typography>
              </Stack>
              <Stack direction={'row'} px={5} py={3} gap={8}>
                <Stack direction={'column'}>
                  <Typography >Group Town Hall Meet-up with Showcase</Typography>
                  <Typography sx={{ opacity: 0.5 }} >Due in 2 Days</Typography>

                </Stack>
                <Typography style={{ width: 90, height: 30, backgroundColor: 'orange', opacity: 0.5, borderRadius: 5, color: 'white' }} >In Progress</Typography>
              </Stack>  <Stack direction={'row'} px={5} py={1} gap={13}>
                <Stack direction={'column'}>
                  <Typography >Next Sprint Planning and Estimation</Typography>
                  <Typography sx={{ opacity: 0.5 }}>Due in 2 Days</Typography>

                </Stack>
                <Typography style={{ width: 90, height: 30, backgroundColor: 'teal', opacity: 0.5, borderRadius: 5, color: 'white' }}>Success</Typography>
              </Stack>  <Stack direction={'row'} px={5} py={2} gap={10}>
                <Stack direction={'column'}>
                  <Typography >Sprint Delivery and Project Deployment</Typography>
                  <Typography sx={{ opacity: 0.5 }}>Due in 2 Days</Typography>

                </Stack>
                <Typography style={{ width: 90, height: 30, backgroundColor: 'red', opacity: 0.5, borderRadius: 5, color: 'white' }}>Rejected</Typography>
              </Stack>

            </Card>
            <Card className='card8' xs={6} >
              <Stack direction={'row'} px={5} py={5} gap={45}>
                <Typography>Trends</Typography>
                < MoreVertIcon />

              </Stack>
              <Grid style={{ backgroundColor: 'orange', opacity: 0.6, padding: 8 }}>
                <Stack direction={'row'} px={5} gap={25}>

                  <Stack direction={'column'}>

                    <Typography >Group Lunch Celebration</Typography>
                    <Typography sx={{ opacity: 0.5 }} >Due in 2 Days</Typography>

                  </Stack>
                  <Typography>+28%</Typography>

                </Stack>
              </Grid>
              <Stack direction={'row'} px={5} py={3} gap={20} backgroundColor={'teal'} style={{ opacity: 0.7 }} >
                <Stack direction={'column'}>
                  <Typography >Home Navigation Optimization</Typography>
                  <Typography sx={{ opacity: 0.5 }} >Due in 2 Days</Typography>

                </Stack>
                <Typography >-50%</Typography>
              </Stack>  <Stack direction={'row'} px={5} py={3} gap={24} backgroundColor={'red'} style={{ opacity: 0.6 }}>
                <Stack direction={'column'}>
                  <Typography >Rebrand Strategy Planning</Typography>
                  <Typography sx={{ opacity: 0.5 }}>Due in 2 Days</Typography>

                </Stack>
                <Typography >-27%</Typography>
              </Stack>  <Stack direction={'row'} px={5} py={3} gap={20} backgroundColor={'violet'} style={{ opacity: 0.7 }}>
                <Stack direction={'column'}>
                  <Typography >Product Goals strategy Meet-up</Typography>
                  <Typography sx={{ opacity: 0.5 }}>Due in 2 Days</Typography>

                </Stack>
                <Typography >+8%</Typography>
              </Stack>

            </Card>

          </Stack>
        </Grid>

      </Box>
    </>
  )
}

export default web