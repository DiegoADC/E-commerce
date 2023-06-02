import { useState } from 'react'
import { Box, IconButton, Drawer, Divider, List } from '@mui/material'
import { Menu, Close, BuildCircleOutlined, SelectAllOutlined, Devices, HomeOutlined } from '@mui/icons-material'
import { CardProfile, LoginSection, ItemsLinks } from './'

export const MenuHam = () => {
  const [open, setState] = useState(false)

  const toggleDrawer = (open) => () => setState(open)

  return (
    <div className='md:hidden'>
      <IconButton
        className='text-white p-0'
        onClick={toggleDrawer(true)}
      >
        <Menu fontSize='large' />
      </IconButton>

      <Drawer
        anchor='left'
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{ className: 'w-full' }}
      >
        <Box
          className='p-3 h-full'
          bgcolor='white'
          role='presentation'
        >
          <IconButton className='ml-3 mb-2' onClick={toggleDrawer(false)}>
            <Close fontSize='large' />
          </IconButton>

          <Divider className='mb-2' />

          <Box
            className='mb-2'
            onClick={toggleDrawer(false)}
          >

            <List>

              <ItemsLinks
                title='Inicio'
                icon={<HomeOutlined />}
                to='/home'
              />
              <ItemsLinks
                title='Reparaciónes'
                icon={<BuildCircleOutlined />}
                to='/categorys/repairs'
              />
              <ItemsLinks
                title='Componentes'
                icon={<SelectAllOutlined />}
                to='/categorys/components'
              />
              <ItemsLinks
                title='Dispositivos'
                icon={<Devices />}
                to='/categorys/devices'
              />

            </List>
          </Box>

          {
            true
              ? <CardProfile setState={setState} />
              : <LoginSection setState={setState} />
          }

        </Box>
      </Drawer>
    </div>
  )
}
