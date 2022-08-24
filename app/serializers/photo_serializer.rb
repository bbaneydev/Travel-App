class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :who, :photo, :album_id, :user_id
end
