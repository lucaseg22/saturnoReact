import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import '../styles/CartWidget.css';



export default function CartWidget() {

  const { cartProducts, totalPrice } = useContext(CartContext)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }; 
  
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',}}>
        <Tooltip title="Carrito">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar s={{ width: 32, height: 32, backgroundColor:'blue'}}><img className='cwImg' src='/img/Cart.png' /></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          Productos agregados: 
        </MenuItem>
        <Divider />
        {cartProducts.map((cartProduct) =>{
          return(   <div key={cartProduct.id}>
                      <MenuItem>
                        <img className='cartProductImg' src={cartProduct.img} />
                      <div className='title'> {cartProduct.title} </div>
                      <div className='price'> $ {cartProduct.price} </div> 
                      </MenuItem>
                      <Divider />
                    </div>
                    )
        })}
                    <MenuItem>
                    Total: ${totalPrice()}
                    </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
