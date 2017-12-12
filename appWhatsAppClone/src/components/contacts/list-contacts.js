import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { listContactsFetch } from '../../actions/app-actions';

class ListContacts extends Component {
  // Só executa após a mudança no redux de contacts
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.contacts);
  }

  componentWillMount() {
    this.props.listContactsFetch();
    this.createDataSource(this.props.contacts);
  }

  createDataSource(contacts) {
    // Criando uma fonte de dados para o ListView
    // rowHasChanged recebe uma função de callback para verificar como tratar o dado quando tiver uma alteração na lista
    // (r1, r2) => r1 !== r2 verifica se teve alteração no registro.
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    // Os dados não podem ser mutáveis, então vamos ter que usar
    // uma função do próprio DataSource para ele lidar com a imutabilidade
    // Criando uma variavel da classe no contexto de PropTypes, posso usar em qualquer lugar aqui dentro da Classe
    this.sourceData = ds.cloneWithRows(contacts);
  }

  render() {
    return (
      <ListView
        enableEmptySections // para remover o alerta de renderização de linhas vazias
        dataSource={this.sourceData}
        renderRow={data => (
          <View>
            <Text>{data.nome}</Text>
            <Text>{data.email}</Text>
          </View>
        )}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const contacts = _.map(state.app.contacts, (val, uid) => ({ ...val, uid }));
  return { contacts };
};

export default connect(mapStateToProps, { listContactsFetch })(ListContacts);
