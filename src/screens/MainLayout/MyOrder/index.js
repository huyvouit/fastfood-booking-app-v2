import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  RefreshControl,
  Modal,
  Pressable,
} from 'react-native';

import HeaderPage from 'components/Header';

import StarBuck from 'assets/images/starbuck.png';
import styles from './styles';
import orderApi from 'api/order_api';
import moment from 'moment';
import {showToastWithGravityAndOffset} from 'helper/toast';
import {formatter} from 'helper/formatter';

const TAB = [
  {
    id: 0,
    value: 'Upcoming',
  },
  {
    id: 1,
    value: 'History',
  },
  {
    id: 2,
    value: 'Cancel',
  },
];

const ModalDetail = ({isVisible, setIsVisible, item}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setIsVisible(!isVisible);
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Detail Order</Text>
          <ScrollView>
            <Text style={{...styles.modalText, color: '#000', marginBottom: 0}}>
              Receiver
            </Text>
            <Text>{item?.userInfo?.username}</Text>
            <Text>{item?.userInfo?.phone}</Text>
            {item?.userInfo?.address && (
              <Text
                style={
                  styles.textInfo
                }>{`${item?.userInfo?.address?.number}, ${item?.userInfo?.address?.street}, ${item?.userInfo?.address?.ward}, ${item?.userInfo?.address?.district}, ${item?.userInfo?.address?.province}`}</Text>
            )}
            {item?.addressText && (
              <Text style={styles.textInfo}>{item?.addressText}</Text>
            )}
            <Text
              style={{
                ...styles.modalText,
                color: '#000',
                marginTop: 5,
                marginBottom: 0,
              }}>
              Payment
            </Text>
            <Text>{item?.paymentMethod}</Text>
            <Text
              style={{
                ...styles.modalText,
                color: '#000',
                marginTop: 5,
                marginBottom: 0,
              }}>
              Total Cost
            </Text>
            <Text>{formatter.format(item?.totalCost)}</Text>
            <Text
              style={{
                ...styles.modalText,
                color: '#000',
                marginTop: 5,
                marginBottom: 0,
              }}>
              Products
            </Text>
            <ScrollView>
              <View>
                {item?.products.map((item, index) => {
                  return (
                    <View style={styles.foods} key={index}>
                      <Image
                        source={{uri: item.productId?.mainImage}}
                        style={{
                          width: 70,
                          height: 70,
                          resizeMode: 'cover',
                          position: 'relative',
                          borderRadius: 10,
                          marginRight: 20,
                        }}
                      />
                      <View style={styles.information}>
                        <Text style={styles.name_food} numberOfLines={1}>
                          {item.productId?.name}
                        </Text>
                        <Text style={styles.savour} numberOfLines={1}>
                          {item.productId?.description}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={styles.cost}>
                            {item?.size == 'M'
                              ? formatter.format(
                                  item.productId?.type[0]?.price.$numberDecimal,
                                )
                              : formatter.format(
                                  item.productId?.type[1]?.price.$numberDecimal,
                                )}
                          </Text>
                          <Text style={styles.quantity}>
                            {' '}
                            X {item.quantity}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </ScrollView>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setIsVisible(!isVisible)}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const MyOrderScreen = ({navigation}) => {
  const [tabSelected, setTabSelected] = useState(0);
  const [upcomingList, setUpComingList] = useState(null);
  const [historyList, setHistoryList] = useState(null);
  const [cancelList, setCancelList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  const fetchUpComingList = async () => {
    try {
      const params = {
        currentPage: 1,
        documentsPerPage: 10,
      };

      const response = await orderApi.getUpComingOrder(params);

      if (response.data.success) {
        setUpComingList(response.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
      setIsLoading(false);
    }
  };
  const fetchHistoryList = async () => {
    try {
      const params = {
        currentPage: 1,
        documentsPerPage: 10,
      };

      const response = await orderApi.getHistoryOrder(params);
      if (response.data.success) {
        setHistoryList(response.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
      setIsLoading(false);
    }
  };
  const fetchCancelList = async () => {
    try {
      const params = {
        currentPage: 1,
        documentsPerPage: 10,
      };

      const response = await orderApi.getCancelOrder(params);
      if (response.data.success) {
        setCancelList(response.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
      setIsLoading(false);
    }
  };
  const handleCancelOrder = async item => {
    try {
      const response = await orderApi.cancelOrder({orderId: item._id});
      if (response.data.success) {
        await fetchUpComingList();
        await fetchCancelList();

        setIsLoading(false);
        showToastWithGravityAndOffset(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      showToastWithGravityAndOffset(error);
    }
  };

  const handleBookAgainOrder = async item => {
    try {
      const response = await orderApi.bookAgainOrder({orderId: item._id});
      if (response.data.success) {
        await fetchCancelList();
        await fetchUpComingList();

        setIsLoading(false);
        showToastWithGravityAndOffset(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      showToastWithGravityAndOffset(error);
    }
  };
  const onRefresh = async tabSelected => {
    if (tabSelected == 0) {
      await fetchUpComingList();
    }
    if (tabSelected == 1) {
      await fetchHistoryList();
    }

    if (tabSelected == 2) {
      await fetchCancelList();
    }
  };

  const handleViewDetail = item => {
    setProductDetail(item);
    setIsVisible(true);
  };
  useEffect(() => {
    fetchUpComingList();
    fetchHistoryList();
    fetchCancelList();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.title}>
        <HeaderPage
          returnPage={() => navigation.openDrawer()}
          title="My Orders"
        />
        {/* <TouchableOpacity style={{position: 'absolute', top: 0}}>
          <HeaderPage returnPage={() => navigation.openDrawer()} />
        </TouchableOpacity>
        <Text style={styles.titleText}>Vouchers</Text> */}
      </View>

      <View style={styles.textWrapper}>
        <View style={styles.tab}>
          {TAB?.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.tabUpcoming(tabSelected, item.id)}
                key={index}
                onPress={() => setTabSelected(index)}>
                <Text style={styles.tabUpcomingText(tabSelected, item.id)}>
                  {item.value}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {productDetail && (
          <ModalDetail
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            item={productDetail}
          />
        )}
        <ScrollView
          style={styles.content}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => onRefresh(tabSelected)}
            />
          }>
          {tabSelected == 0 &&
            (upcomingList?.length > 0 ? (
              upcomingList?.map((item, index) => {
                return (
                  <View style={styles.presentOrder} key={index}>
                    <View style={styles.part_1}>
                      <View style={styles.info}>
                        <Text style={styles.numberItem}>
                          {`${item?.products?.length} item(s)`}
                        </Text>
                        <Text style={{...styles.brand}}>Upcoming</Text>
                      </View>

                      <View style={styles.infoRight}>
                        <Text style={styles.code}>{`#${item._id.slice(
                          -8,
                        )}`}</Text>
                        <Text style={styles.brand}>
                          {' '}
                          {moment(item?.orderDate).format('MMMM D, YYYY')}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.part_4}>
                      {tabSelected != 1 && (
                        <TouchableOpacity
                          style={styles.buttonActionLeft}
                          onPress={() => handleCancelOrder(item)}>
                          <Text style={styles.buttonActionLeftText}>
                            Cancel
                          </Text>
                        </TouchableOpacity>
                      )}
                      <TouchableOpacity
                        style={styles.buttonActionRight}
                        onPress={() => handleViewDetail(item)}>
                        <Text style={styles.buttonActionRightText}>Detail</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })
            ) : (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 500,
                }}>
                <Text style={styles.brand}>No order is delivering</Text>
              </View>
            ))}
          {tabSelected == 1 &&
            (historyList?.length > 0 ? (
              historyList?.map((item, index) => {
                return (
                  <View style={styles.presentOrder} key={index}>
                    <View style={styles.part_1}>
                      <View style={styles.info}>
                        <Text style={styles.numberItem}>
                          {`${item?.products?.length} item(s)`}
                        </Text>
                        <Text style={{color: 'green', ...styles.brand}}>
                          Success
                        </Text>
                      </View>

                      <View style={styles.infoRight}>
                        <Text style={styles.code}>{`#${item._id.slice(
                          -8,
                        )}`}</Text>
                        <Text style={styles.brand}>
                          {' '}
                          {moment(item?.orderDate).format('MMMM D, YYYY')}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.part_4}>
                      <TouchableOpacity
                        style={styles.buttonActionLeft}
                        onPress={() =>
                          navigation.navigate('ReviewScreen', {
                            firstItem: item?.products[0],
                          })
                        }>
                        <Text style={styles.buttonActionLeftText}>Review</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.buttonActionRight}
                        onPress={() => handleViewDetail(item)}>
                        <Text style={styles.buttonActionRightText}>Detail</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })
            ) : (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 500,
                }}>
                <Text style={styles.brand}>No order is finished</Text>
              </View>
            ))}
          {tabSelected == 2 &&
            (cancelList?.length > 0 ? (
              cancelList?.map((item, index) => {
                return (
                  <View style={styles.presentOrder} key={index}>
                    <View style={styles.part_1}>
                      <View style={styles.info}>
                        <Text style={styles.numberItem}>
                          {`${item?.products?.length} item(s)`}
                        </Text>
                        <Text style={{color: 'red', ...styles.brand}}>
                          Cancel
                        </Text>
                      </View>

                      <View style={styles.infoRight}>
                        <Text style={styles.code}>{`#${item._id.slice(
                          -8,
                        )}`}</Text>
                        <Text style={styles.brand}>
                          {' '}
                          {moment(item?.orderDate).format('MMMM D, YYYY')}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.part_4}>
                      {tabSelected != 1 && (
                        <TouchableOpacity
                          style={styles.buttonActionLeft}
                          onPress={() => handleBookAgainOrder(item)}>
                          <Text style={styles.buttonActionLeftText}>
                            Order Again
                          </Text>
                        </TouchableOpacity>
                      )}
                      <TouchableOpacity
                        style={styles.buttonActionRight}
                        onPress={() => handleViewDetail(item)}>
                        <Text style={styles.buttonActionRightText}>Detail</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })
            ) : (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 500,
                }}>
                <Text style={styles.brand}>No order is canceled</Text>
              </View>
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyOrderScreen;
