import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Link, ListItem } from '@mui/material'

export const ItemsLinksDesk = ({ title, to }) => {
  const label = `Ir a ${title}`
  return (
    <ListItem className='p-0 w-min'>
      <Link
        component={RouterLink}
        to={to}
        className='text-white no-underline hover:text-slate-200'
        title={label}
        aria-label={label}
      >
        {title}
      </Link>
    </ListItem>
  )
}

ItemsLinksDesk.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}
