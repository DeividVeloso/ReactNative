import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Dimensions,
  AppRegistry
} from "react-native";
import _ from "lodash";
import RadioForm from "./src/components/radio-form";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between"
  },
  title: { color: "#000", fontSize: 18 },

  question: { marginVertical: 5 },
  options: { marginVertical: 5 }
});

export class pocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: false,
      answer: "",
      questions: {
        QUESTOES: {
          DC: {
            "01": {
              OPCOES: [
                "O fiador pode se exonerar do cumprimento da garantia estabelecida sem limitação de tempo, desde que promova a notificação do credor.",
                "A ausência de renúncia ao benefício de ordem impede a excussão de bens do fiador, caso o devedor recaia em insolvência.",
                "A fiança por dívida futura não admite exoneração do fiador, exceto se a obrigação ainda não exigível for cumprida antecipadamente.",
                "A manifestação de vontade do devedor é requisito essencial à validade da fiança."
              ],
              RESPOSTA: 1,
              TEXTO: "Assinale a alternativa correta."
            },
            "02": {
              OPCOES: ["Deivid", "Ana", "Nenhum", "Não sei"],
              RESPOSTA: 2,
              TEXTO: "Quem foi?"
            },
            "03": {
              OPCOES: ["Deivid", "LP", "EDU", "BRUNO"],
              RESPOSTA: 2,
              TEXTO: "Quem sera o próximo a sair?"
            }
          }
        }
      },
      pagination: 0
    };
    this.flat = null;
    console.log("EGGS");
  }

  renderItemList() {}

  getItemLayout = (data, index) => ({
    length: Dimensions.get("window").width,
    offset: Dimensions.get("window").width * index,
    index
  });

  scrollToIndexRight = (index, dataSize) => {
    if (index <= dataSize && this.state.pagination !== dataSize) {
      this.setState({ pagination: ++this.state.pagination }, () =>
        this.flat.scrollToIndex({
          animated: true,
          index: this.state.pagination
        })
      );
      console.log("RINDEX", index);
      console.log("RDATA", dataSize);
      console.log("Rpagination", this.state.pagination);
    }
  };

  scrollToIndexLeft = (index, dataSize) => {
    if (index > 0 && dataSize > -1) {
      this.setState({ pagination: --this.state.pagination }, () =>
        this.flat.scrollToIndex({
          animated: true,
          index: this.state.pagination
        })
      );
      console.log("LINDEX", index);
      console.log("LDATA", dataSize);
      console.log("Lpagination", this.state.pagination);
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          ref={flat => (this.flat = flat)}
          data={_.values(this.state.questions["QUESTOES"]["DC"])}
          renderItem={({ item, index }) => (
            <RadioForm
              question={item["TEXTO"]}
              options={item["OPCOES"]}
              onSelected={id => console.log(id)}
            />
          )}
          horizontal
          keyExtractor={(item, index) => index}
          initialScrollIndex={0}
          getItemLayout={this.getItemLayout}
          scrollEnabled={false}
        />
        <Button
          title="<----"
          onPress={() =>
            this.scrollToIndexLeft(
              this.state.pagination,
              this.flat.props.data.length - 1
            )
          }
        />
        <Button
          title="---->"
          onPress={() =>
            this.scrollToIndexRight(
              this.state.pagination,
              this.flat.props.data.length - 1
            )
          }
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("pocs", () => pocs);
