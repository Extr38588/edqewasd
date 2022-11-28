const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  background: url('https://cdn57.androidauthority.net/wp-content/uploads/2019/02/samsung-galaxy-s10-wallpaper-5.jpg');
  background-position: center;
  min-height: 100vh;
  max-width: 420px;
  margin: 0 auto;
  color: #fff; 
`

const StatusBar = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`

const Carrier = styled.span`
  text-transform: uppercase;
`

const PhoneStatus = styled.div`
  display: flex;
  align-items: center;
`

const BatteryPercent = styled.span`
  margin-right: 0.25rem;
`

const Icon = styled.i.attrs(props => ({
  'data-feather': props.name
}))`
  
`

const DateTime = styled.div`
  padding: 2.5rem 1rem;
`

const Time = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 3.5rem;
  font-weight: 300;
  margin: 0;
`

const Date = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  margin: 0;
`

const Signature = styled.p`
  
`

const NotifTray = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Notification = styled.li`
  color: #333;
  background: rgba(255, 255, 255, 0.5);
  padding: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &:first-child {
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }

  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
`

const NotifIcon = styled.div`
  margin-right: 1rem;
`

const NotifTitle = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0;
`

const NotifDescription = styled.div`
`

const NotifMain = styled.h4`
  margin: 0;
`

const NotifContent = styled.p`
  margin: 0;
  font-size: 0.875rem;
`

function App(props) {
  React.useEffect(() => {
    feather.replace()
  })
  
  return (
    <Container>
      <StatusBar>
        <Carrier>
          Globe
        </Carrier>
        <PhoneStatus>
          <Icon name="bar-chart" />
          <BatteryPercent>
            30%
          </BatteryPercent>
          <Icon name="battery-charging" />
        </PhoneStatus>
      </StatusBar>
      <DateTime>
        <Time>
          6:30
        </Time>
        <Date>
          Thu, Jun 20
        </Date>
        <Signature>
          brenfreeze
        </Signature>
      </DateTime>
      <NotifTray>
        <Notification>
          <NotifTitle>
            <NotifIcon>
              <Icon name="cast" />
            </NotifIcon>
            <NotifDescription>
              <NotifMain>
                Cast your device
              </NotifMain>
              <NotifContent>
                Devices available on your network
              </NotifContent>
            </NotifDescription>
          </NotifTitle>
        </Notification>
        <Notification>
          <NotifTitle>          
            <NotifIcon>
              <Icon name="git-pull-request" />
            </NotifIcon>
            <NotifDescription>
              <NotifMain>
                Merge request successful
              </NotifMain>
              <NotifContent>
                feature/lockscreen merged to master
              </NotifContent>
            </NotifDescription>
          </NotifTitle>
        </Notification>
        <Notification>
          <NotifTitle>
            <NotifIcon>
              <Icon name="heart" />
            </NotifIcon>
            <NotifDescription>
              <NotifMain>
                @belapadilla liked your tweet
              </NotifMain>
            </NotifDescription>
          </NotifTitle>
        </Notification>
      </NotifTray>
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))