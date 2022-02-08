import { ReactElement } from 'react';
import {
	Container,
	Row,
	Col
} from 'reactstrap';
import { Grid } from 'react-loader-spinner';

const Loading = ({ children }: { children?: string | ReactElement | (string | ReactElement)[] }) => <Container fluid='md mt-5 mb-5'>
	<Row style={{
		minHeight: 400
	}} className='align-items-center mt-auto mb-auto'>
		<Col xs='12' className='text-center'>
			<Row className='justify-content-center mb-4'>
				<Col className='d-flex justify-content-center'>
					<Grid color='yellow' />
				</Col>
			</Row>
			{
				children ?
					<Row className='justify-content-center'>
						<Col className='d-flex justify-content-center'>
							{ children }
						</Col>
					</Row>
					: ''
			}
		</Col>
	</Row>
</Container>;

export default Loading;