import React from 'react'
import palette from './index'
import { ThemeWrapper } from '../../theme/ThemeWrapper'
import { Typography } from '../Typography'
export const Colors = () => {
  return (
    <ThemeWrapper>
      <div style={{ display: 'flex', gap: '10px' }}>
        {Object.keys(palette).map((color, id) => (
          <div
            key={color + id}
            style={{
              display: 'flex',
              gap: '10px',
              flexDirection: 'column',
              flex: 1
            }}
          >
            <Typography style={{ textTransform: 'capitalize' }}>
              {color}
            </Typography>
            <div>
              {Object.keys(palette[color]).map((id) => {
                const mainColor = palette[color]
                return (
                  <div
                    key={id}
                    style={{
                      background:
                        id.indexOf('Contrast') > 0 ? mainColor.main : '',
                      padding: '6px'
                    }}
                  >
                    <p style={{ display: 'inline-flex', gap: '10px' }}>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '2px',
                          border:
                            mainColor[id] === '#ffffff' && '1px solid black',
                          background: mainColor[id] || ''
                        }}
                      />
                      <Typography>
                        {' '}
                        {color}.{id}
                      </Typography>
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </ThemeWrapper>
  )
}
