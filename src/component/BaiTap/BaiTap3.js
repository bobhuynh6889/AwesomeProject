import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ProductsM from './ProductsM';

// class Products extends Component {
//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <View style={{flex: 3}}>
//           <Image
//             style={{
//               flex: 1,
//               borderTopLeftRadius: 15,
//               borderTopRightRadius: 15,
//             }}
//             source={{
//               uri: this.props.uri,
//             }}
//           />
//         </View>
//         <View style={{flex: 1, justifyContent: 'center', paddingLeft: 12}}>
//           <Text style={{fontWeight: '700'}}>{this.props.title}</Text>
//           <Text style={{color: 'gray'}}>{this.props.category}</Text>
//         </View>
//         <View
//           style={{
//             flex: 1,
//             flexDirection: 'row',
//             paddingLeft: 12,
//             // justifyContent: 'center',
//             // alignItems: 'center',
//           }}>
//           <View
//             style={{
//               flex: 1,
//               // backgroundColor: 'blue',
//               justifyContent: 'center',
//               // alignItems: 'center',
//             }}>
//             <Text style={{fontWeight: '700'}}>{this.props.price}</Text>
//           </View>
//           <View
//             style={{
//               flex: 1,

//               // backgroundColor: 'red',
//               paddingRight: 12,
//               justifyContent: 'center',
//               alignItems: 'flex-end',
//             }}>
//             <Icon
//               style={{
//                 marginRight: 10,
//                 borderStyle: 'solid',
//                 borderWidth: 3,
//                 borderColor: '#3464F6',
//                 borderRadius: 5,
//                 backgroundColor: '#3464F6',
//               }}
//               name="shoppingcart"
//               size={25}
//               color="white"
//             />
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

export default class BaiTap3 extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* HEADER */}
        <View style={{flex: 2}}>
          <View
            style={{
              height: 70,
              alignItems: 'flex-end',
              flexDirection: 'row',
            }}>
            {/* BACK BUTTON */}
            <View style={{flex: 1}}>
              <Icon name="left" size={25} color="black" />
            </View>
            {/* TITLE TAG */}
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{fontWeight: '700'}}>Products List</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              {/* SEACH ICON */}
              <Icon
                style={{marginRight: 10}}
                name="search1"
                size={25}
                color="black"
              />
              {/* SHOPPING CART ICON */}
              <Icon
                style={{marginRight: 10}}
                name="shoppingcart"
                size={25}
                color="blue"
              />
            </View>
          </View>
          {/* CATEGORY */}
          <View
            style={{
              height: 40,
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                borderColor: 'blue',
                borderStyle: 'solid',
                borderBottomWidth: 3,
              }}>
              {/* ALL */}
              <Text style={{color: 'blue'}}>ALL</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              {/* FURNITURE */}
              <Text style={{color: 'gray'}}>FURNITURE</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              {/* LIGHTING */}
              <Text style={{color: 'gray'}}>LIGHTING</Text>
            </View>
          </View>
        </View>
        {/* PRODUCT LIST */}
        <View style={{flex: 14, backgroundColor: '#F7F8FC'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              padding: 15,
            }}>
            {/* WHITE CHAIR */}
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                marginRight: 8,
                borderRadius: 15,
              }}>
              <ProductsM
                uri="https://cb2.scene7.com/is/image/CB2/SideraChairWhiteSHS17_1x1"
                title="White chair"
                category="Furniture"
                price="150 $"></ProductsM>
            </View>
            {/* PINK CHAIR */}
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                marginLeft: 8,
                borderRadius: 15,
              }}>
              <ProductsM
                uri="https://pictureperfecthome.co.uk/wp-content/uploads/2020/03/Light-Pink-Velvet-Shell-Back-Dining-Chair-Armchair-With-Chrome-Legs.jpg"
                title="Pink chair"
                category="Furniture"
                price="130 $"></ProductsM>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              padding: 15,
              paddingTop: -8,
            }}>
            {/* BLACK LAMP */}
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                marginRight: 8,
                borderRadius: 15,
              }}>
              <ProductsM
                uri="https://cgaxisimg.ams3.cdn.digitaloceanspaces.com/2014/08/cgaxis_models_16_501.jpg"
                title="Black lamp"
                category="Lighting"
                price="80 $"></ProductsM>
            </View>
            {/* YELLOW LAMP */}
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                marginLeft: 8,
                borderRadius: 15,
              }}>
              <ProductsM
                uri="https://ae01.alicdn.com/kf/He139023547434a30b1ee4d085d0a407ax/Modern-Yellow-Table-Lamps-for-Bedroom-Living-Room-Bedside-Lamp-Stand-Desk-Light-Fixtures-Led-Standing.jpg"
                title="Yellow lamp"
                category="Lighting"
                price="100 $"></ProductsM>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
