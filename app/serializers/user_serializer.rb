class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :trips, serializer: TripSerializer
  has_many :albums, serializer: AlbumSerializer
end
