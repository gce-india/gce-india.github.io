import {
	Container,
	Row,
	Col
} from 'reactstrap';

const Discover = () => <Container style={{
		minHeight: 400
	}} fluid='md mt-5 mb-5'>
	<Row className='justify-content-center mt-auto mb-auto'>
		<Col xs='12' md='8'>
			<h2 className='text-center mb-3'>Discover</h2>
			<h6 className='text-center mb-3'>Coming soon!</h6>
		</Col>
	</Row>
	<Row className='mt-3 justify-content-center'>
		<Col xs='12' md='8'>
			In progress... ;)
		</Col>
	</Row>
</Container>;

export default Discover;