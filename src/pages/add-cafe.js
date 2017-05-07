import {Component} from 'react';
import Layout from '../components/layout';
import PageContainer from '../components/page-container';
import {CleanTitle} from '../components/title';
import {Text} from '../components/content';
import Map from '../containers/add-cafe-map';
import GetUserLocation from '../containers/get-user-location';
import {AddCafePageContainer as MapContainer} from '../../src/components/map-container';
import AddCafeForm from '../containers/add-cafe-form';

export default class AddCafePage extends Component {
	render() {
		return (
			<Layout>
				<GetUserLocation>
					<div>
						<PageContainer>
							<CleanTitle>Add a Cafe</CleanTitle>
							<Text>Pick a location on the map to add a new cafe.</Text>
						</PageContainer>

						<MapContainer>
							<Map onClick={this.handleClickMap}/>
						</MapContainer>

						<PageContainer>
							<AddCafeForm/>
						</PageContainer>
					</div>
				</GetUserLocation>
			</Layout>
		);
	}
}
