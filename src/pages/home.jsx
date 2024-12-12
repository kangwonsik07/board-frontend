import { TextField, Button, Container, Typography, CircularProgress } from '@mui/material'

const Home = () => {
   return (
      <Container maxWidth="sm">
         <Typography variant="h4" gutterBottom>
            회원가입
         </Typography>

         <TextField label="이메일" variant="outlined" fullWidth margin="normal" />

         <TextField label="사용자 이름" variant="outlined" fullWidth margin="normal" />

         <TextField label="비밀번호" variant="outlined" type="password" fullWidth margin="normal" o />

         <TextField label="비밀번호 확인" variant="outlined" type="password" fullWidth margin="normal" />

         <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
            회원가입
         </Button>
      </Container>
   )
}

export default Home
