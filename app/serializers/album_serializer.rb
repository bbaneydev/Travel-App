class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :location, :date, :photo, :user_id
  has_many :photos, serializer: PhotoSerializer
end
