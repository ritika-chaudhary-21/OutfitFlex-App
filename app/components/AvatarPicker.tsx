import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import avatars from '../constants/avatars';

type AvatarPickerProps = {
  selectedAvatar: number | null;
  onSelect: (avatar: number) => void;
};

const AvatarPicker: React.FC<AvatarPickerProps> = ({ selectedAvatar, onSelect }) => {
  return (
    <View style={styles.avatarContainer}>
      {avatars.map((avatar: number) => (
        <TouchableOpacity key={avatar} onPress={() => onSelect(avatar)}>
          <Image
            source={avatar}
            style={[
              styles.avatar,
              selectedAvatar === avatar ? styles.avatarSelected : null,
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 6,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  avatarSelected: {
    borderColor: '#9B6EF3',
  },
});

export default AvatarPicker;
