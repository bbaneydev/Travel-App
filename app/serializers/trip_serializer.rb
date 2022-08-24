class TripSerializer < ActiveModel::Serializer
  attributes :id, :location, :start_date, :text, :end_date, :user_id
end
